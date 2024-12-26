import type { RouteMeta as IRouteMeta } from '@repo-core/typings';

import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta extends IRouteMeta {}
}

export interface CloudAppConfigRaw{
  VITE_GLOB_API_URL: string;
}

declare global {
  interface Window {
    _CLOUD_APP_CONF_:CloudAppConfigRaw
  }
}