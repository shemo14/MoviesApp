import CoreLocation
import Foundation

@objc(LocationManager)
class LocationManager: NSObject, CLLocationManagerDelegate {
  static func moduleName() -> String {
      return "LocationManager"
  }

  private var locationManager: CLLocationManager?
  private var resolveBlock: RCTPromiseResolveBlock?
  private var rejectBlock: RCTPromiseRejectBlock?

  override init() {
      super.init()
      locationManager = CLLocationManager()
      locationManager?.delegate = self
      locationManager?.desiredAccuracy = kCLLocationAccuracyBest
  }

  @objc
  func getCurrentLocation(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      self.resolveBlock = resolve
      self.rejectBlock = reject

      if CLLocationManager.locationServicesEnabled() {
          let authStatus = CLLocationManager.authorizationStatus()
          switch authStatus {
          case .notDetermined:
              locationManager?.requestWhenInUseAuthorization()
          case .authorizedWhenInUse, .authorizedAlways:
              locationManager?.requestLocation()
          case .denied, .restricted:
              reject("PERMISSION_DENIED", "Location permission not granted", nil)
          @unknown default:
              reject("UNKNOWN_ERROR", "Unknown authorization status", nil)
          }
      } else {
          reject("LOCATION_SERVICES_DISABLED", "Location services are disabled", nil)
      }
  }

  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
      if let location = locations.last {
          let result: [String: Any] = [
              "latitude": location.coordinate.latitude,
              "longitude": location.coordinate.longitude
          ]
          DispatchQueue.main.async {
              self.resolveBlock?(result)
              self.resolveBlock = nil
              self.rejectBlock = nil
          }
          locationManager?.stopUpdatingLocation()
      } else {
          DispatchQueue.main.async {
              self.rejectBlock?("NO_LOCATION_DATA", "No location data available", nil)
              self.resolveBlock = nil
              self.rejectBlock = nil
          }
      }
  }

  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
      DispatchQueue.main.async {
          self.rejectBlock?("LOCATION_ERROR", "Failed to get location", error)
          self.resolveBlock = nil
          self.rejectBlock = nil
      }
  }

  func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
      
      if status == .authorizedWhenInUse || status == .authorizedAlways {
          locationManager?.requestLocation()
      } else if status == .denied || status == .restricted {
          DispatchQueue.main.async {
              self.rejectBlock?("PERMISSION_DENIED", "Location permission not granted", nil)
              self.resolveBlock = nil
              self.rejectBlock = nil
          }
      }
  }
}
