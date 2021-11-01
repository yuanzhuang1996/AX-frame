import { AxVueBase, AxCore } from '@ax/app-core-framework';

export declare class AxTestModule extends AxVueBase {
  readonly voo: string;
  readonly optional: string;
  private btnText;
  private badge;
  /**
   * Api测试
   */
  private testApi;
  created(): void;
}

export declare class AxHelloWorld extends AxVueBase {
  private badge;
}

export declare namespace AxDemoModules {
  export class Core {
    constructor();
    /**
     * 获取模块
     * @returns {SystemModule}
     */
    static get module(): AxCore.SystemModule;
    /**
     * 上报消息
     * @type {{redirect(): void}}
     */
    static emit: {
      redirect(): void;
    };
  }

  export enum EDemoEnum {
    ACTIVE = 0,
    DISABLE = 1,
  }
  export const APP_ID = 'demo-module';

  export interface IDemoType {
    foo(): void;
  }
  export type TExec = 'edit' | 'add';
}
