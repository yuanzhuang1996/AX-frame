import { TGlobalLang } from '@/locale/zh_CN';
import AxDemoModules from '@modules/core-module/locale/en_US';
import AxTestModule from '@modules/test-module/locale/en_US';
import AxHelloWorld from '@modules/hello-world/locale/en_US';

const GlobalLang: TGlobalLang = {
  global: require('@ax/app-core-language/lib/locale/global/en_US').default,
  AxUI: require('@ax/app-core-components/lib/locale/ax-com-core/en_US').default,
  system: {
    title: 'Application Module Development Template',
  },
  'demo-modules': {
    'core-module': AxDemoModules,
    'test-module': AxTestModule,
    'hello-world': AxHelloWorld,
  },
};

export default GlobalLang;
