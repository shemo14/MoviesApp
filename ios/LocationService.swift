import Foundation
import CoreLocation
import React

@objc(LocationService)
class LocationService: RCTEventEmitter, CLLocationManagerDelegate {
  private var locationManager: CLLocationManager?

  override static func moduleName() -> String! {
    return "LocationService"
  }

  override func supportedEvents() -> [String]! {
    return ["onLocationChanged"]
  }

  @objc func startUpdatingLocation() {
    locationManager = CLLocationManager()
    locationManager?.delegate = self
    locationManager?.requestWhenInUseAuthorization()
    locationManager?.startUpdatingLocation()
    print("Location updates started")
  }

  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    if let location = locations.first {
      print("Location received: \(location.coordinate.latitude), \(location.coordinate.longitude)")
      sendLocationToReact(latitude: location.coordinate.latitude, longitude: location.coordinate.longitude)
    } else {
      print("No locations received")
    }
  }

  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    print("Failed to get location: \(error.localizedDescription)")
  }

  private func sendLocationToReact(latitude: Double, longitude: Double) {
    sendEvent(withName: "onLocationChanged", body: ["latitude": latitude, "longitude": longitude])
  }
}
