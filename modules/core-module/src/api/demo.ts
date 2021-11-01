import { requestMgt } from './index';

// demo
export default class DemoApi {
  // 禁止实例化使用
  private constructor() {}

  public static getData(
    id: string,
    key: string,
    sort: boolean = false
  ): Promise<boolean> {
    return requestMgt('preplanIndexPage-get', id, key, sort);
  }
}
