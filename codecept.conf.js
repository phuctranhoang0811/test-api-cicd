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
  name: 'test-api'
}