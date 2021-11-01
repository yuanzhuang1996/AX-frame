import AxDemoModules from '@modules/core-module/locale/zh_CN';
import AxTestModule from '@modules/test-module/locale/zh_CN';
import AxHelloWorld from '@modules/hello-world/locale/zh_CN';

const GlobalLang = {
  global: require('@ax/app-core-language/lib/locale/global/zh_CN').default,
  AxUI: require('@ax/app-core-components/lib/locale/ax-com-core/zh_CN').default,
  system: {
    title: '应用模块开发模板',
  },
  'demo-modules': {
    'core-module': AxDemoModules,
    'test-module': AxTestModule,
    'hello-world': AxHelloWorld,
  },
};

export default GlobalLang;

export type TMainLang = typeof GlobalLang.system;

export type TGlobalLang = typeof GlobalLang;
