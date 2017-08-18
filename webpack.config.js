module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      SearchForm: 'app/Components/SearchForm/SearchForm.jsx',
      googleRequests: 'app/api/googleRequests.jsx',
      SearchDisplay: 'app/Components/SearchDisplay/SearchDisplay.jsx',
      SearchBox: 'app/Components/SearchBox/SearchBox.jsx',
      Main: 'app/Components/Main/Main.jsx',
      NavBar: 'app/Components/NavBar/NavBar.jsx',
      Wishlist: 'app/Components/Wishlist/Wishlist.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-runtime']

        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
