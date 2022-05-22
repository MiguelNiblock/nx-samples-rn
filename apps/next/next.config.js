// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // compiler: {
  //   styledComponents: true,//Only used when there's no babel config file
  // },
  webpack: (webpackConfig, context) => {
    //https://github.com/vercel/next.js/blob/canary/examples/with-react-native-web/next.config.js
    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };
    //https://github.com/vercel/next.js/blob/canary/examples/with-react-native-web/next.config.js
    webpackConfig.resolve.extensions = [
      // Preference to the .web. version of a file
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...webpackConfig.resolve.extensions,
    ];
    // webpackConfig.module.rules.push({});
    return webpackConfig;
  },
};

module.exports = withNx(nextConfig);
