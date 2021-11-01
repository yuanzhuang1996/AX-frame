import { AxStageBase } from '@ax/app-stage-base';
import { RouteConfig } from 'vue-router';
import createRouteMeta = AxStageBase.createRouteMeta;

// 组件页面路由描述
const tests: RouteConfig[] = [
  {
    path: '/test/hello-world',
    name: 'hello-world',
    component: () => import('@modules/hello-world'),
    meta: createRouteMeta({ module: '测试', label: 'Hello World!' }),
  },
  {
    path: '/test/test-module',
    name: 'test-module',
    component: () => import('@modules/test-module'),
    meta: createRouteMeta({ module: '测试', label: '测试模块' }),
  },
];

export default tests;
