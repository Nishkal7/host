const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

const getConfig = () => {
  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      port: 3000,
      historyApiFallback: true,
      compress: true,
      hot: true,
      open: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name]-bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ModuleFederationPlugin({
        name: "Host",
        filename: "remoteEntry.js",
        remotes: {
          Remote: `Remote@http://localhost:4000/remoteEntry.js`,
        },
        // exposes: {
        //   "./SharedState": "./src/state/SharedState",
        // },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: dependencies["react-router-dom"],
          },
        },
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    target: "web",
  };
};

module.exports = getConfig();
