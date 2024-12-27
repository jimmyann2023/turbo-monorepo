import { computed } from 'vue';

import { diff } from '@repo-core/shared/utils';

import { preferencesManager } from './preferences';
import { isDarkTheme } from './update-css-variables';

function usePreferences() {
  const preferences = preferencesManager.getPreferences();
  const initialPreferences = preferencesManager.getInitialPreferences();

  /**
   * @zh_CN 计算偏好设置的变化
   */
  const diffPreference = computed(() => {
    return diff(initialPreferences, preferences);
  });

  const appPreferences = computed(() => preferences.app);

  /**
   * @zh_CN 判断是否为暗黑模式
   * @param  preferences - 当前偏好设置对象，它的主题值将被用来判断是否为暗黑模式。
   * @returns 如果主题为暗黑模式，返回 true，否则返回 false。
   */
  const isDark = computed(() => {
    return isDarkTheme(preferences.theme.mode);
  });

  const locale = computed(() => {
    return preferences.app.locale;
  });

  const isMobile = computed(() => {
    return appPreferences.value.isMobile;
  });

  const theme = computed(() => {
    return isDark.value ? 'dark' : 'light';
  });

  return {
    appPreferences,
    diffPreference,
    initialPreferences,
    isDark,
    isMobile,
    locale,
    preferences,
    theme,
  };
}

export { usePreferences };
