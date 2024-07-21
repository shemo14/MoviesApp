## Movies App Demo

[Watch the demo video](https://drive.google.com/file/d/1aOljT5cpetOKrF1-_kuj27SnXomma8Jf/view?usp=sharing)


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# MOVIESAPP

This is the folder structure for the MoviesApp project.

## Project Structure

```plaintext
MOVIESAPP/
├── __mocks__/                       # Mock files for testing
│   └── api.ts
├── fileMock.js
├── __tests__/                       # Test files
│   ├── __snapshots__/               # Snapshot tests
│   ├── MoviesRequests.test.ts
│   ├── MoviesSlice.test.tsx
│   ├── TrailersRequests.test.ts
│   ├── TrailersSlice.test.ts
├── .bundle/
├── .jest/
├── android/                         # Android native files
├── ios/                             # iOS native files
├── node_modules/                    # Node modules
├── src/                             # Source files for the project
│   ├── app/                         # App-level logic
│   │   ├── Client.ts
│   │   ├── ClientConnection.ts
│   │   ├── reduxHooks.ts
│   │   ├── store.ts
│   │   └── testAppSelector.ts
│   ├── assets/                      # Asset files (images, fonts, etc.)
│   │   ├── fonts/
│   │   └── svg/
│   ├── common/                      # Common reusable components
│   │   ├── Container/
│   │   ├── Image/
│   │   ├── Input/
│   │   ├── MovieTitle/
│   │   ├── PosterView/
│   │   ├── SearchInput/
│   │   ├── SearchItem/
│   │   ├── SwitchBox/
│   │   ├── Text/
│   │   ├── Toast/
│   │   └── UserLocation/
│   ├── components/                  # Higher level components
│   │   ├── Genres/
│   │   └── MovieItem/
│   ├── features/                    # Feature-specific logic
│   │   ├── movies/
│   │   ├── toast/
│   │   └── trailers/
│   │       └── ToastContext.tsx
│   ├── navigation/                  # Navigation files
│   │   ├── MainNavigation.tsx
│   │   ├── ScreenEnum.ts
│   │   ├── StackNavigation.tsx
│   │   └── TabNavigation.tsx
│   ├── screens/                     # Screen components
│   │   ├── MovieDetails.tsx
│   │   ├── Movies.tsx
│   │   ├── Search.tsx
│   │   └── SearchResult.tsx
│   ├── utils/                       # Utility files
│   │   └── theme/
│   │       └── colors.ts
│   ├── vendor/
│   ├── index.ts                     # Entry point for the application
├── .eslintignore                    # ESLint ignore file
├── .eslintrc.js                     # ESLint configuration
├── .gitignore                       # Git ignore file
├── .prettierrc.js                   # Prettier configuration
├── .watchmanconfig                  # Watchman configuration
├── app.json                         # App configuration
├── App.tsx                          # Main App component
├── babel.config.js                  # Babel configuration
├── Gemfile                          # Gemfile for Ruby dependencies
├── Gemfile.lock                     # Gemfile lock
├── index.js                         # Entry point for React Native
├── jest.config.js                   # Jest configuration
├── jest.setup.js                    # Jest setup file
├── metro.config.js                  # Metro configuration
├── package.json                     # Project dependencies and scripts
├── package-lock.json                # Lock file for npm
├── README.md                        # Project README file
├── svg.d.ts                         # TypeScript declarations for SVGs
└── tsconfig.json                    # TypeScript configuration
```


## Folder Descriptions

- **__mocks__/**: Contains mock files for testing.
- **fileMock.js**: Mock file for file imports in tests.
- **__tests__/**: Contains test files.
  - **__snapshots__/**: Snapshot tests.
  - **MoviesRequests.test.ts**: Unit tests for movie requests.
  - **MoviesSlice.test.tsx**: Unit tests for movie slice.
  - **TrailersRequests.test.ts**: Unit tests for trailer requests.
  - **TrailersSlice.test.ts**: Unit tests for trailer slice.
- **.bundle/**: Contains bundle configuration files.
- **.jest/**: Contains Jest configuration files.
- **android/**: Contains Android native files.
- **ios/**: Contains iOS native files.
- **node_modules/**: Contains Node modules.
- **src/**: Contains the main source code for the project.
  - **app/**: App-level logic.
    - **Client.ts**: Client configuration.
    - **ClientConnection.ts**: Client connection setup.
    - **reduxHooks.ts**: Custom hooks for Redux.
    - **store.ts**: Redux store configuration.
    - **testAppSelector.ts**: Test app selectors.
  - **assets/**: Asset files (images, fonts, etc.).
    - **fonts/**: Font files.
    - **svg/**: SVG files.
  - **common/**: Common reusable components.
    - **Container/**: Container component.
    - **Image/**: Image component.
    - **Input/**: Input component.
    - **MovieTitle/**: Movie title component.
    - **PosterView/**: Poster view component.
    - **SearchInput/**: Search input component.
    - **SearchItem/**: Search item component.
    - **SwitchBox/**: Switch box component.
    - **Text/**: Text component.
    - **Toast/**: Toast component.
    - **UserLocation/**: User location component.
  - **components/**: Higher-level components.
    - **Genres/**: Genre components.
    - **MovieItem/**: Movie item components.
  - **features/**: Feature-specific logic.
    - **movies/**: Movie-related logic.
    - **toast/**: Toast notifications logic.
    - **trailers/**: Trailer-related logic.
      - **ToastContext.tsx**: Toast context setup.
  - **navigation/**: Navigation setup.
    - **MainNavigation.tsx**: Main navigation configuration.
    - **ScreenEnum.ts**: Screen enumeration.
    - **StackNavigation.tsx**: Stack navigation setup.
    - **TabNavigation.tsx**: Tab navigation setup.
  - **screens/**: Screen components.
    - **MovieDetails.tsx**: Movie details screen.
    - **Movies.tsx**: Movies screen.
    - **Search.tsx**: Search screen.
    - **SearchResult.tsx**: Search result screen.
  - **utils/**: Utility files.
    - **theme/**: Theming files.
      - **colors.ts**: Color definitions.
  - **vendor/**: Vendor-specific files.
  - **index.ts**: Entry point for the application.

## Additional Configuration Files

- **.eslintignore**: Specifies files and directories to be ignored by ESLint.
- **.eslintrc.js**: ESLint configuration.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **.prettierrc.js**: Prettier configuration.
- **.watchmanconfig**: Watchman configuration.
- **app.json**: App configuration.
- **App.tsx**: Main App component.
- **babel.config.js**: Babel configuration.
- **Gemfile**: Gemfile for Ruby dependencies.
- **Gemfile.lock**: Gemfile lock.
- **index.js**: Entry point for React Native.
- **jest.config.js**: Jest configuration.
- **jest.setup.js**: Jest setup file.
- **metro.config.js**: Metro configuration.
- **package.json**: Project dependencies and scripts.
- **package-lock.json**: Lock file for npm.
- **README.md**: Project README file.
- **svg.d.ts**: TypeScript declarations for SVGs.
- **tsconfig.json**: TypeScript configuration.

- # LocationManager - Swift Native Module for React Native

## Overview

`LocationManager` is a Swift native module for React Native that allows you to access the device's current location using CoreLocation.

## Installation

1. **Add the Native Module**:
   - Create a new Swift file in your React Native iOS project and paste the following code:

```swift
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
```
2. **Link the Native Module:**:
   - Ensure that your native module is linked correctly in your iOS project. If you are using React Native 0.60 and above, autolinking should handle this for you. Otherwise, you may need to manually link the module.
  
3. **Use the Native Module in React Native:**:
   - Create a JavaScript file to access the native module:
  
```js
import { NativeModules } from 'react-native';
const { LocationManager } = NativeModules;

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    LocationManager.getCurrentLocation(resolve, reject);
  });
};
```
4. **Usage:**:
```js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getCurrentLocation } from './path-to-your-location-manager';

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getCurrentLocation()
      .then(loc => {
        setLocation(loc);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {location ? (
        <Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>
  );
};

export default App;
```

# LocationModule - Kotlin Native Module for React Native

## Overview

`LocationModule` is a Kotlin native module for React Native that allows you to access the device's current location using Google's FusedLocationProviderClient.

## Installation

1. **Add the Native Module**:
   - Create a new Kotlin file in your React Native Android project and paste the following code:

```kotlin
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
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices

class LocationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ActivityEventListener, PermissionListener {
    private val fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(reactContext)
    private var promise: Promise? = null

    companion object {
        private const val LOCATION_PERMISSION_REQUEST_CODE = 1
    }

    init {
        reactContext.addActivityEventListener(this)
    }

    override fun getName(): String {
        return "LocationManager"
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
```

# PosterView - Objective-C Custom UIView

## Overview

`PosterView` is an Objective-C custom UIView subclass for displaying an image with a loading indicator. It downloads an image from a given URL and displays it with a smooth fade-in animation.

## Code

```objective-c
#import "PosterView.h"

@interface PosterView ()

@property (nonatomic, strong) UIImageView *imageView;
@property (nonatomic, strong) UIActivityIndicatorView *activityIndicator;

@end

// initWithFrame: and initWithCoder: are overridden to call a custom setupView method.

@implementation PosterView

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    [self setupView];
  }
  return self;
}

- (instancetype)initWithCoder:(NSCoder *)coder {
  if (self = [super initWithCoder:coder]) {
    [self setupView];
  }
  return self;
}

// The setupView method initializes the imageView and activityIndicator, configures their properties, and adds them as subviews.
- (void)setupView {
  self.imageView = [[UIImageView alloc] init];
  self.imageView.contentMode = UIViewContentModeScaleAspectFit;
  self.imageView.clipsToBounds = YES;
  self.imageView.layer.cornerRadius = 10;
  [self addSubview:self.imageView];

  self.activityIndicator = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleLarge];
  self.activityIndicator.hidesWhenStopped = YES;
  [self addSubview:self.activityIndicator];
}

// The setImageUrl: method sets the image URL and starts downloading the image.
- (void)setImageUrl:(NSString *)imageUrl {
  _imageUrl = [imageUrl copy];
  [self downloadImageFromUrl:[NSURL URLWithString:imageUrl]];
}

// The downloadImageFromUrl: method handles downloading the image and updating the imageView.
- (void)downloadImageFromUrl:(NSURL *)url {
  [self.activityIndicator startAnimating];
  NSURLSessionDataTask *downloadTask = [[NSURLSession sharedSession]
    dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
      if (data && !error) {
        UIImage *image = [UIImage imageWithData:data];
        dispatch_async(dispatch_get_main_queue(), ^{
          self.imageView.image = image;
          [self animateImageView];
          [self.activityIndicator stopAnimating];
        });
      } else {
        dispatch_async(dispatch_get_main_queue(), ^{
          [self.activityIndicator stopAnimating];
        });
      }
  }];
  [downloadTask resume];
}

// The animateImageView method handles fading in the image once it is loaded.
- (void)animateImageView {
  self.imageView.alpha = 0;
  [UIView animateWithDuration:0.5 animations:^{
    self.imageView.alpha = 1;
  }];
}

// The layoutSubviews method sets the frame of the imageView and centers the activityIndicator.
- (void)layoutSubviews {
  [super layoutSubviews];
  self.imageView.frame = self.bounds;
  self.activityIndicator.center = CGPointMake(CGRectGetMidX(self.bounds), CGRectGetMidY(self.bounds));
}

@end
```




## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
