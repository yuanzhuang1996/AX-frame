import { requestCas } from './index';

// Cas相关接口
export default class CasApi {
  // 禁止实例化使用
  private constructor() {}

  public static getUserInfo(
    id: string
  ): Promise<{ id: string; account: string }> {
    return requestCas('get-user-info', { id });
  }
}
