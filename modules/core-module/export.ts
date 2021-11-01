import CoreLang from '@modules/core-module/src/core/lang';
import Core from './src/core';
import DemoApi from './src/api/demo';
import CasApi from './src/api/cas';

// 导出核心模块
export { Core };
// 导出国际化模块
export { CoreLang };
// 导出api
export { DemoApi, CasApi };
// 导出常量定义
export * from './src/const';
// 导出类型定义
export * from './src/interfaces';
// 导出工具类
// export { Foo };
