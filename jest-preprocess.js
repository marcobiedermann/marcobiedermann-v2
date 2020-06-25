/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const babelOptions = {
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
