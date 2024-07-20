#import "PosterView.h"

@interface PosterView ()

@property (nonatomic, strong) UIImageView *imageView;
@property (nonatomic, strong) UIActivityIndicatorView *activityIndicator;

@end

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

- (void)setImageUrl:(NSString *)imageUrl {
  _imageUrl = [imageUrl copy];
  [self downloadImageFromUrl:[NSURL URLWithString:imageUrl]];
}

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

- (void)animateImageView {
  self.imageView.alpha = 0;
  [UIView animateWithDuration:0.5 animations:^{
    self.imageView.alpha = 1;
  }];
}

- (void)layoutSubviews {
  [super layoutSubviews];
  self.imageView.frame = self.bounds;
  self.activityIndicator.center = CGPointMake(CGRectGetMidX(self.bounds), CGRectGetMidY(self.bounds));
}

@end
