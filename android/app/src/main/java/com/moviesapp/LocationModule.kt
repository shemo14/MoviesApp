package com.moviesapp

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.util.Log
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.PermissionListener
import com.facebook.react.module.annotations.ReactModule
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices

@ReactModule(name = LocationModule.NAME)
class LocationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ActivityEventListener, PermissionListener {
    private val fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(reactContext)
    private var promise: Promise? = null

    companion object {
        const val NAME = "LocationManager"
        private const val LOCATION_PERMISSION_REQUEST_CODE = 1
    }

    init {
        reactContext.addActivityEventListener(this)
    }

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        val activity: Activity = currentActivity ?: run {
            promise.reject("NO_ACTIVITY", "No activity found")
            return
        }

        this.promise = promise

        if (ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED &&
            ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(activity, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), LOCATION_PERMISSION_REQUEST_CODE)
        } else {
            fetchLocation()
        }
    }

    private fun fetchLocation() {
        try {
            if (ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED) {

                fusedLocationClient.lastLocation.addOnSuccessListener { location: Location? ->
                    if (location != null) {
                        val result: WritableMap = Arguments.createMap().apply {
                            putDouble("latitude", location.latitude)
                            putDouble("longitude", location.longitude)
                        }
                        promise?.resolve(result)
                    } else {
                        Log.e("LocationModule", "Location is null")
                        promise?.reject("LOCATION_ERROR", "Unable to get location")
                    }
                }.addOnFailureListener { exception ->
                    Log.e("LocationModule", "Error getting location", exception)
                    promise?.reject("LOCATION_ERROR", exception.localizedMessage, exception)
                }
            } else {
                promise?.reject("PERMISSION_DENIED", "Location permission not granted")
            }
        } catch (e: SecurityException) {
            Log.e("LocationModule", "Security exception: ${e.message}", e)
            promise?.reject("SECURITY_EXCEPTION", e.message, e)
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray): Boolean {
        if (requestCode == LOCATION_PERMISSION_REQUEST_CODE) {
            if ((grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED)) {
                fetchLocation()
                return true
            } else {
                promise?.reject("PERMISSION_DENIED", "Location permission not granted")
            }
        }
        return false
    }

    override fun onNewIntent(intent: Intent?) {
        // No implementation needed for this example
    }

    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        // No implementation needed for this example
    }
}
