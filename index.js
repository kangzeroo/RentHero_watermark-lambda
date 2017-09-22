'use strict';
var LambdaWatermark = require('lambda-watermark');

var options = {
  watermarkImagePath: './rbdesktop.png',
  relativeSize: 0.5,
  opacity: 30
};

exports.handler = function(event, context) {
  new LambdaWatermark(options)(event, context);
};
