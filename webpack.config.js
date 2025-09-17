const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const { ModuleFederationPlugin } = container;
const { dependencies, insights } = require('./package.json');
const moduleName = insights.appname.replace(/-(\w)/g, (_, match) => match.toUpperCase());

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'auto',
    clean: true,
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
      shared: [
        { 'react-redux': { version: dependencies['react-redux'] } },
        { 'react-router-dom': { version: dependencies['react-router-dom'], import: false, singleton: true } },
        { '@unleash/proxy-client-react': { version: dependencies['@unleash/proxy-client-react'], singleton: true } },
      ],
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
  ],
};
