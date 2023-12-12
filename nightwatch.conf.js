const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  src_folders: 'test',
  page_objects_path: 'pages',
  output_folder: 'reports',
  test_settings: {
    chrome: {
      webdriver: {
        start_process: true,
        port: 9515,
        server_path: chromedriver.path,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    firefox: {
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: geckodriver.path,
      },
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};