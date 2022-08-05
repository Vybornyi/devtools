module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.(jpj|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8,

              outputPath: 'images'
            },
          },
        ]
      }
    ]
  }
};