var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/components/**/*.test.jsx',
    'app/actions/**/*.test.jsx',
    'app/reducers/**/*.test.jsx'],
    preprocessors: {
      'app/components/**/*.test.jsx': ['webpack', 'sourcemap'],
      'app/actions/**/*.test.jsx': ['webpack', 'sourcemap'],
      'app/reducers/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
