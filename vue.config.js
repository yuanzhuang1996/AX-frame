const { ModuleAssetsHandler } = require('@ax/webpack-plugins');
const path = require('path');

module.exports = {
  // 输出目录地址
  publicPath: process.env.VUE_APP_ROOT_PATH,
  // 输出的资源文件夹
  assetsDir: 'assets',
  // 使用哈希命名文件，以便控制浏览器缓存
  filenameHashing: true,
  css: {
    // 是否为所有的 CSS 及其预处理文件开启 CSS Modules
    requireModuleExtension: true,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        plugins: [require('autoprefixer')],
        // options here will be passed to postcss-loader
      },
    },
  },
  devServer: {
    // 配置自动启动浏览器
    open: false,
    // 启动端口
    port: 9002,
    // 是否使用 HTTPS
    https: false,
  },
  // WEBPACK 配置
  chainWebpack: (config) => {
    config.resolve.alias.set('@modules', path.join(__dirname, 'modules'));
    // 解析Markdown文件转成vue组件
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false,
        },
      })
      .end()
      .use('markdown-loader')
      .loader('@ax/webpack-loaders/lib/markdown-loader')
      .end();
  },
  // 插件配置
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === 'production' ? false : 'cheap-module-source-map',
    plugins: [
      // 模块资源管理及SCSS编码处理，下面的配置是默认配置，如果不修改可以不传参
      new ModuleAssetsHandler({
        // 模块根目录
        modulesDir: 'modules',
        // 模块下资源文件放置目录
        moduleAssetsDir: 'src/assets',
        // 模块下皮肤文件放置目录
        moduleThemesDir: 'src/assets/themes',
        // 输出资源文件放置目录
        distAssetsDir: 'assets',
        // 输出皮肤文件放置目录
        distThemesDir: 'assets/themes',
      }),
    ],
  },
};
