<script setup lang="ts">
import { computed } from 'vue';

import { preferences, usePreferences } from '@repo/preferences';

import { App, ConfigProvider, theme } from 'ant-design-vue';

import { useAntdDesignTokens } from '#/hooks';

import HelloWorld from './components/HelloWorld.vue';

const { isDark } = usePreferences();

const { tokens } = useAntdDesignTokens();

const tokenTheme = computed(() => {
  const algorithm = isDark.value
    ? [theme.darkAlgorithm]
    : [theme.defaultAlgorithm];

  // antd 紧凑模式算法
  if (preferences.app.compact) {
    algorithm.push(theme.compactAlgorithm);
  }

  return {
    algorithm,
    token: tokens,
  };
});
</script>

<template>
  <ConfigProvider :theme="tokenTheme">
    <App>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img alt="Vite logo" class="logo" src="/vite.svg" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img alt="Vue logo" class="logo vue" src="./assets/vue.svg" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" />
    </App>
  </ConfigProvider>
</template>

<style></style>
