import { AxCore, AxEvent } from '@ax/app-core-framework';
import SystemCenter = AxCore.SystemCenter;

// 主系统模块
const MainSystem = SystemCenter;

// 上报事件处理 FIXME: demo演示，开发时记得删掉
MainSystem.dispatcher
  .on('redirect', (evt) => {
    // eslint-disable-next-line no-console
    console.log('需要重新登陆', evt);
    MainSystem.broadcast(new AxEvent(MainSystem, 'received', '123'));
  })
  .on('xxx', (evt) => {
    // eslint-disable-next-line no-console
    console.log(evt);
  });

export default MainSystem;
