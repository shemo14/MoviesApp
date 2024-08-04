#import "PosterViewManager.h"
#import "PosterView.h"

@implementation PosterViewManager
RCT_EXPORT_MODULE(PosterView)

- (UIView *)view {
  return [PosterView new];
}

RCT_EXPORT_VIEW_PROPERTY(imageUrl, NSString)

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
