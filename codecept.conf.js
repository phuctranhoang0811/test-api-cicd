exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://dummyjson.com',
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
    }
  },
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['REST']
    }
  },
  name: 'test-api'
}