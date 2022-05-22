module.exports = {
  presets: [
    'next/babel', //Handles most things like ts and transpilation, recommended in next example for rnw. https://nextjs.org/docs/advanced-features/customizing-babel-config
    // [
    //   "@nrwl/next/babel",
    //   {
    //     "runtime": "automatic",
    //     "useBuiltIns": "usage"
    //   }
    // ] works but isn't documented anywhere
  ],
  plugins: [['react-native-web', { commonjs: true }]], //Next sample rnw has the commonjs:true.
};
