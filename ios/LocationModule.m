#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTRootView.h>
#import <CoreLocation/CoreLocation.h>

@interface RCT_EXTERN_MODULE(LocationManager, NSObject)
RCT_EXTERN_METHOD(getCurrentLocation:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end
