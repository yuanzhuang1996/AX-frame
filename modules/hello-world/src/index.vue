<template>
  <div class="hello_world app_demo_modules">
    {{ ModuleLang.t('slogan') }} {{ badge }}
  </div>
</template>

<script lang="ts">
import { AxVueBase } from '@ax/app-core-framework';
import { Component } from 'vue-property-decorator';
import ModuleLang from './lang';

@Component({
  components: {},
  data() {
    return {
      ModuleLang,
    };
  },
})
export default class HelloWorld extends AxVueBase {
  private badge = 45;
}
</script>
