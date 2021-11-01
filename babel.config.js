module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 按需加载组件库，不配置的话主系统需要全量引入组件库才能使用
    [
      'import',
      {
        libraryName: '@ax/app-core-components',
      },
    ],
  ],
};
