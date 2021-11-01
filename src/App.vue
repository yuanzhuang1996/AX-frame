<template>
  <div id="app" class="app">
    <ax-stage-header
      :name="name"
      :version="version"
      :title="mainLang.t('title')"
    ></ax-stage-header>
    <div class="app_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { SystemLang } from '@/core/locale';
import { AxVueBase } from '@ax/app-core-framework';
import { AxStageHeader } from '@ax/app-stage-base';
import { Component } from 'vue-property-decorator';

// 获取package的信息
const packageInfo: {
  name: string;
  version: string;
} = require('../package.json');

@Component({
  components: {
    AxStageHeader,
  },
})
export default class App extends AxVueBase {
  // 包名称
  private name = packageInfo.name;

  // 当前版本
  private version = packageInfo.version;

  // 系统语言对象
  private mainLang = SystemLang;
}
</script>
