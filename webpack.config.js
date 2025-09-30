const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const { ModuleFederationPlugin } = container;
const { insights } = require('./package.json');

// Load environment variables from .env file

const moduleName = insights.appname.replace(/-(\w)/g, (_, match) => match.toUpperCase());

module.exports = {
  entry: path.resolve(__dirname, 'src/entry.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/staging/cost-management/',
    clean: true,
  },
  devServer: {
    port: 1337,
    host: '0.0.0.0',
    server: 'https', // Enable HTTPS for .redhat.com domains
    allowedHosts: 'all', // Allow any host to access the dev server
    historyApiFallback: {
      rewrites: [{ from: /^\/staging\/cost-management\/.*$/, to: '/staging/cost-management/index.html' }],
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: [
      {
        context: ['/api'],
        target: process.env.ROS_BACKEND_URL || 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: moduleName,
      filename: 'remoteEntry.js',
      exposes: {
        './RootApp': path.resolve(__dirname, './src/appEntry.tsx'),
        // Shared component module path. Must include default export!
        './MfeOptimizationsBadge': path.resolve(__dirname, './src/fed-modules/mfeOptimizationsBadge.tsx'),
        './MfeOptimizationsBreakdown': path.resolve(__dirname, './src/fed-modules/mfeOptimizationsBreakdown.tsx'),
        './MfeOptimizationsDetails': path.resolve(__dirname, './src/fed-modules/mfeOptimizationsDetails.tsx'),
        './MfeOptimizationsLink': path.resolve(__dirname, './src/fed-modules/mfeOptimizationsLink.tsx'),
        './MfeOptimizationsSummary': path.resolve(__dirname, './src/fed-modules/mfeOptimizationsSummary.tsx'),
        './MfeOptimizationsTable': path.resolve(__dirname, './src/fed-modules/mfeOptimizationsTable.tsx'),
      },
      shared: {
        react: { singleton: true, strictVersion: false, requiredVersion: false },
        'react-dom': { singleton: true, strictVersion: false, requiredVersion: false },
        'react/jsx-runtime': { singleton: true, strictVersion: false, requiredVersion: false },
        'react/jsx-dev-runtime': { singleton: true, strictVersion: false, requiredVersion: false },
        'react-redux': { singleton: true, strictVersion: false, requiredVersion: false },
        'react-router': { singleton: true, strictVersion: false, requiredVersion: false },
        'react-router-dom': { singleton: true, strictVersion: false, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
  ],
};
