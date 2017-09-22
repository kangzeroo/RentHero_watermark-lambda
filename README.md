# Watermark-lambda

Watermarking for images in AWS S3 using AWS Lambda

This module places a watermark in the bottom right corner of your image.
An S3 Lambda event cant be used to watermark every image that is uploaded to S3.

## How to use

- `npm install lambda-watermark`
- Create your function (index.js)

```javascript
'use strict';
var LambdaWatermark = require('lambda-watermark');

var options = {
  watermarkImagePath: './exampleWatermark.png',
  relativeSize: 5,
  opacity: 50
};

exports.handler = function(event, context) {
  new LambdaWatermark(options)(event, context);
};
```
- [Set up Lambda service on AWS](http://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)
- Zip up your directory (index.js, watermark image, and node_modules) and upload to your AWS Lambda function 

## Configuration (options)
- `watermarkImagePath`: The relative path to your image
- `relativeSize`: The size of the watermark (percent relative to the parent image)
- `opacity`: How opaque the watermark should be. (100 is fully opaque, 0 is fully transparent)


The dest bucket has been updated to the rentburrow processed watermark S3 bucket at path (node_modules/lambda-watermark/lib/lambdaWrapper.js)
