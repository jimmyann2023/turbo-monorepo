import { createApp } from 'vue';

import '@repo/styles';
import '@repo/styles/antd';

import App from './App.vue';

async function bootstrap(namespace: string) {
  console.log(namespace);
  const app = createApp(App);

  app.mount('#app');
}

export { bootstrap };
