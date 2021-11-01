import { TMainLang } from '@/locale/zh_CN';
import { ApiBackstage } from '@ax/app-core-api';
import { AxLocale, AxTypes, AxVuexApp } from '@ax/app-core-framework';
import IAppLocale = AxTypes.IAppLocale;

const LangList = new Map<string, () => Promise<any>>([
  [
    'zh_CN',
    () =>
      import(
        /* webpackMode: "lazy", webpackChunkName: "zh_CN" */ '../locale/zh_CN'
      ),
  ],
  [
    'en_US',
    () =>
      import(
        /* webpackMode: "lazy", webpackChunkName: "en_US" */ '../locale/en_US'
      ),
  ],
]);

// 系统国际化对象
export const SystemLang = AxLocale.create<TMainLang>('system');

// 国际化加载类
export default class Locale {
  /**
   * 设置国际化内容
   * @param lang
   * @returns {Promise<void>}
   */
  static async setLocale(lang?: string) {
    // 设置国际化列表
    Locale.getLocaleList();

    // 获取目标语言
    const currentLang = lang || Locale.getCurrentLang();

    // 获取目标语言的国际化内容的异步方法
    const GetLocal = LangList.get(currentLang);

    // 加载失败的处理
    if (!GetLocal) {
      // eslint-disable-next-line no-console
      console.error(`国际化文件加载失败，请重试。【语言代码：${currentLang}】`);
      return;
    }

    // 获取获取目标语言的国际化内容
    const locale = await GetLocal();
    // eslint-disable-next-line no-console
    console.log('当前语言', AxVuexApp.lang);
    // eslint-disable-next-line no-console
    console.log('国际化对象', locale);
    // 如果内容是es模块，加载default
    if ((locale as any).__esModule === true) {
      // 设置到国际化控制方法里
      AxLocale.setLocales(locale.default);
    } else {
      // 设置到国际化控制方法里
      AxLocale.setLocales(locale as any);
    }
  }

  /**
   * 获取当前语言
   * @returns {string}
   */
  static getCurrentLang() {
    return AxVuexApp.lang || 'zh_CN';
  }

  /**
   * 获取国际化列表
   * @returns {Promise<void>}
   */
  static async getLocaleList() {
    // 过去可选的国际化列表
    const localeList = await ApiBackstage.actor['syslanguage-types-get']();
    // 设置国际化列表到vuex中，方便其他模块读取
    await AxVuexApp.setLocaleList(
      localeList.map<IAppLocale>((locale) => ({
        name: locale.name || '',
        defaulted: !!locale.defaulted,
        code: locale.code || '',
      }))
    );
    return localeList;
  }
}
