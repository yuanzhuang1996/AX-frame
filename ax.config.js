const modules = require('./modules/modules.json');
const pkg = require('./package.json');
const tsconfig = require('./tsconfig.json');

const declarationDir = tsconfig.compilerOptions.declarationDir;

module.exports = {
  /*
   模块打包配置
   默认配置参考 node_modules\@ax\cli-service-vue\lib\config.js
  */
  lib: {
    // package.json中的包名称
    name: pkg.name,
    // 模块目录，默认'modules'
    moduleDir: 'modules',
    // 输出目录地址，默认lib
    outDir: 'lib',
    // 完整包，默认'index'， 如果是string，默认转换为: { name: '{main}', input: './{moduleDir}/index.ts' }
    // main: { name: 'index', input: './packages/index.ts' },
    // 模块列表，如果元素是string，默认转换为: { name: '{name}', input: './{moduleDir}/{name|dir}/index.ts' }
    modules: modules.list,
    // 会根据modules把 '{externalRoot}/meta' 这样的import改为 '{pkg.name}/{outDir}/meta'，默认'@modules'
    // externalRoot: '@modules',
    // 是否使用MiniCssExtractPlugin插件提取css，默认false
    // extractCss: false,
    // 是否使用ModuleAssetsHandler插件提取css，默认false, 传true时使用默认配置（下面就是）
    moduleCss: true,
    // moduleCss: {
    //   // 模块根目录
    //   modulesDir: 'modules',
    //   // 模块下资源文件放置目录
    //   moduleAssetsDir: 'src/assets',
    //   // 模块下皮肤文件放置目录
    //   moduleThemesDir: 'src/assets/themes',
    //   // 输出资源文件放置目录
    //   distAssetsDir: 'assets',
    //   // 输出皮肤文件放置目录
    //   distThemesDir: 'assets/themes',
    // },
    // merge到webpack的配置
    // 默认配置：'node_modules/@ax/cli-service-vue/lib/webpack.lib.js'
    webpack: {
      // resolve: {
      //   // 别名，默认包含 @ => src @modules => modules
      //   alias: {
      //     '@AxUI': path.join(__dirname, 'packages'),
      //   },
      // },
      // 这里是存放除了nodeResolved 和 externalRoot 之外的externals, 比如cdn或者静态js的引入如果没有，无需配置
      // externals,
    },
  },
  // 声明文件打包配置
  // TODO：目前有问题，先不要用
  types: {
    // 声明文件根目录
    dir: `${declarationDir}`,
    // * 输入目录和文件
    input: `${declarationDir}/modules/index.d.ts`,
    // * 输出目录和文件
    output: `${declarationDir}/bundle.d.ts`,
    // 传入一个正则或者正则数组，替换掉诸如[import './coo.css']等dts会出错的内容(默认会替换掉样式的import)
    replace: [],
  },
  /*
   国际化文件打包配置
   默认配置参考 node_modules\@ax\cli-service-vue\lib\config.js
  */
  locale: {
    // 是否是ts文件
    ts: true,
    // 支持的语言列表
    langList: modules.locale.list,
    // 全部集成
    main: modules.name,
    // 模块列表
    modules: modules.locale.modules,
    // 模块目录，默认 'modules'
    moduleDir: 'modules',
    // 模块目录下的国际化文件列表，默认 'locale'
    localeDir: 'locale',
    // 输出目录，默认 './lib/locale'
    outDir: './lib/locale',
  },
};
