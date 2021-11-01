import { IModuleDefine } from '@/interfaces/irouter';
import modules from '@/router/modules';
import guides from '@/router/guides';
import tests from '@/router/tests';
import { AxStageBase } from '@ax/app-stage-base';
import Vue from 'vue';
import Router from 'vue-router';
import createRouteMeta = AxStageBase.createRouteMeta;

Vue.use(Router);

/**
 * 路由对象数据
 */
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: '/',
  routes: [
    {
      path: '/test',
      name: IModuleDefine.TEST,
      redirect: { name: 'test-start' },
      component: () => import('@/views/test/index.vue'),
      meta: createRouteMeta({ module: '测试' }),
      children: [
        {
          path: '/',
          name: 'test-start',
          component: () => import('@/views/test/dashboard.vue'),
          meta: createRouteMeta({ module: '测试' }),
        },
        ...tests,
      ],
    },
    {
      path: '/',
      name: IModuleDefine.DOC,
      redirect: { name: 'doc-start' },
      component: () => import('@/views/doc/index.vue'),
      meta: createRouteMeta({ module: '文档' }),
      children: [...guides, ...modules],
    },
  ],
});
