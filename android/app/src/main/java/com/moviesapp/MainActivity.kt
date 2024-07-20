package com.moviesapp


import androidx.annotation.NonNull
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
    override fun getMainComponentName(): String = "MoviesApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)


    override fun onRequestPermissionsResult(requestCode: Int, @NonNull permissions: Array<out String>, @NonNull grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)

        val reactInstanceManager: ReactInstanceManager = reactNativeHost.reactInstanceManager
        val reactContext: ReactContext? = reactInstanceManager.currentReactContext

        if (reactContext != null) {
            reactContext.getNativeModule(LocationModule::class.java)
                ?.onRequestPermissionsResult(requestCode, permissions, grantResults)
        }
    }
}
