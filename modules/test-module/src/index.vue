<template>
  <div
    class="
      test_module
      app_demo_modules
      flex:1 flex
      items-center
      justify-center
      align-middle align-text-purple-800
    "
  >
    <div class="title">{{ ModuleLang.t('title') }}</div>
    <ax-button @click="testApi">请求测试</ax-button>
    <i class="i_d_mod i_d_mod_province"></i>
    <ax-badge v-model="badge"></ax-badge>
    <ax-checkbox>单选框</ax-checkbox>
    <div class="css_demo">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      assumenda beatae corporis deserunt distinctio ducimus ea earum, eos error
      est iusto, magnam maiores natus nihil praesentium rem, repudiandae
      similique voluptas!
    </div>

    <div>
      <ax-select :options="options" type="button"></ax-select>
    </div>
  </div>
</template>

<script lang="ts">
import {
  AxBadge,
  AxButton,
  AxCheckbox,
  AxComCore,
  AxSearch,
  AxSelect,
} from '@ax/app-core-components';
import { AxVueBase } from '@ax/app-core-framework';
import AxDemoModules from '@modules/core-module';
import ModuleLang from './lang';
import { Component, Inject } from 'vue-property-decorator';
import IOptionData = AxComCore.IOptionData;

@Component({
  components: {
    AxCheckbox,
    AxBadge,
    AxSelect,
    AxSearch,
    AxButton,
  },
  data() {
    return {
      ModuleLang,
    };
  },
})
export default class TestModule extends AxVueBase {
  // 跨应用信息传递
  // @Inject('voo') readonly voo!: string;
  @Inject({ from: 'optional', default: 'default' }) readonly optional!: string;

  private btnText = '按钮';

  public a: AxDemoModules.IDemoType = { foo() {} };

  private badge: number = 23;

  private options: IOptionData[] = [
    {
      text: '123',
      key: 123,
    },
  ];

  /**
   * Api测试
   */
  private testApi() {
    AxDemoModules.DemoApi.getData('123', 'kkk').then();
  }

  //#region 生命周期
  created(): void {
    // 导入 CSS 文件
    this.importCss(this, ['index.css'], require('../module.json'));
  }
  //#endregion
}
</script>
