import type { Preferences } from './types';

const defaultPreferences: Preferences = {
  app: {
    colorGrayMode: false,
    colorWeakMode: false,
    isMobile: false,
    locale: 'zh-CN',
    name: 'cloud system',
  },
  theme: {
    builtinType: 'default',
    colorDestructive: 'hsl(348 100% 61%)',
    colorPrimary: 'hsl(212 100% 45%)',
    colorSuccess: 'hsl(144 57% 58%)',
    colorWarning: 'hsl(42 84% 61%)',
    mode: 'dark',
    radius: '0.5',
    semiDarkHeader: false,
    semiDarkSidebar: false,
  },
};

export { defaultPreferences };
