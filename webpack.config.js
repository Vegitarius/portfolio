var path = require('path')

module.exports = {
  entry: {
    index: [    
      './src/scripts/script.js',
      './src/scripts/particles',
      './src/scripts/index.js', 
    ],
    project: [
      './src/scripts/script.js',
      './src/scripts/project.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'src')
  },
  mode: 'development',
  watch: true
}