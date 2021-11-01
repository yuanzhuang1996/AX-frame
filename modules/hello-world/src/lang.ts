import { AxLocale } from '@ax/app-core-framework';
import { TLangModule } from '../locale/zh_CN';

// 当前模块国际化对象
const ModuleLang = AxLocale.create<TLangModule>(
  AxLocale.getModuleKey(require('../module.json'))
);

export default ModuleLang;
