/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
const webpack = require("webpack");

dotenv.config();

// webpack is a compiler for JS code. in this case, we're compiling our env variables to the nextjs client build
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        // Define your environment variables here
        "process.env.SERVER": JSON.stringify(process.env.SERVER),
      }),
    );

    return config;
  },
};
