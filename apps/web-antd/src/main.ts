import { initPreferences } from '@repo/preferences';

import { overridesPreferences } from './preferences';

/**
 * 应用初始化完成之后再进行页面加载渲染
 */
async function initApplication() {
  // name用于指定项目唯一标识
  // 用于区分不同项目的偏好设置以及存储数据的key前缀以及其他一些需要隔离的数据
  const env = import.meta.env.PROD ? 'prod' : 'dev';
  const appVersion = import.meta.env.VITE_APP_VERSION;
  const namespace = `${import.meta.env.VITE_APP_NAMESPACE}-${appVersion}-${env}`;

  // app 偏好初始化
  await initPreferences({
    namespace,
    overrides: overridesPreferences,
  });

  const { bootstrap } = await import('./bootstrap');
  await bootstrap(namespace);
}

initApplication();
