import { AxCore, AxEvent } from '@ax/app-core-framework';
import SystemModule = AxCore.SystemModule;
import SystemCenter = AxCore.SystemCenter;

// 模块核心
const module = SystemCenter.getModule('demo-modules');

// 下达事件处理 FIXME: demo演示，开发时记得删掉
module.dispatcher.on('received', (evt) => {
  // eslint-disable-next-line no-console
  console.log('收到', evt);
});

// 核心模块，用来处理应用模块和主系统之前的消息处理
export default class Core {
  constructor() {}

  /**
   * 获取模块
   * @returns {SystemModule}
   */
  public static get module(): SystemModule {
    return module;
  }

  /**
   * 上报消息
   * @type {{redirect(): void}}
   */
  public static emit = {
    redirect() {
      module.emit(new AxEvent(module, 'redirect', 'login'));
    },
  };
}
