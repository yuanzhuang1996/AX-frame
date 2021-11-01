import {
  AxConfig,
  AxRequest,
  AxVuexApp,
  AxVuexUser,
} from '@ax/app-core-framework';
import CoreModule from '../core';
import HttpConfig = AxConfig.HttpConfig;

// 项目要用到的请求host地址
const hostConfig = {
  // 默认登录cas使用请求地址
  HOST_CAS: 'http://183.3.129.44:30048/',
  // 工作流请求地址
  HOST_FlOW: 'http://183.3.129.44:30055/',
};

// 设置请求配置
export const httpConfig = new HttpConfig({
  host: hostConfig,
});

// Cas请求服务
const CasService = new AxRequest({
  baseURL: httpConfig.host.HOST_CAS,
  redirect: CoreModule.emit.redirect,
});

// Mgt请求服务
const MgtService = new AxRequest({
  baseURL: httpConfig.host.HOST_FlOW,
  redirect: CoreModule.emit.redirect,
});

/**
 * Cas请求
 * @param cmd
 * @param params
 * @returns {Promise<T>}
 */
export function requestCas<T>(cmd: string, params: any): Promise<T> {
  // 返回接口结果
  return CasService.http<T>(
    'get',
    `xxx/${cmd}`,
    params,
    {},
    {
      lang: AxVuexApp.lang,
      token: AxVuexUser.token,
    },
    {}
  );
}

/**
 * 默认POST请求模板
 * @param cmd
 * @param data
 * @returns {Promise<T>}
 */
export function requestMgt<T>(cmd: string, ...data: any[]) {
  return MgtService.http<T>(
    'post',
    `api/json/mgt/${cmd}`,
    {},
    JSON.stringify(data),
    {
      lang: AxVuexApp.lang,
      token: AxVuexUser.token,
    },
    {}
  );
}
