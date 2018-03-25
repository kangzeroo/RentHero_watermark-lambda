'use strict';
var LambdaWatermark = require('lambda-watermark');

var options = {
  watermarkImagePath: './renthero.png',
  relativeSize: 0.8,
  opacity: 30
};

exports.handler = function(event, context) {
  new LambdaWatermark(options)(event, context);
};
