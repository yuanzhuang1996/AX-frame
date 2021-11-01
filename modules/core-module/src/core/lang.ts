import { AxLocale } from '@ax/app-core-framework';
import { TLangCoreModule } from '@modules/core-module/locale/zh_CN';

const CoreLang = AxLocale.create<TLangCoreModule>(
  AxLocale.getModuleKey(require('../../module.json'))
);

export default CoreLang;
