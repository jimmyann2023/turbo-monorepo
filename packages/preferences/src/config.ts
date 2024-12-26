import type { Preferences } from "./types";

const defaultPreferences: Preferences = {
  app:{
    name:"cloud system",
    colorGrayMode: false,
    colorWeakMode: false,
    locale: 'zh-CN',
    isMobile: false,
  },
  theme:{
    builtinType: 'default',
    colorDestructive: 'hsl(348 100% 61%)',
    colorPrimary: 'hsl(212 100% 45%)',
    colorSuccess: 'hsl(144 57% 58%)',
    colorWarning: 'hsl(42 84% 61%)',
    mode: 'dark',
    radius: '0.5',
    semiDarkHeader: false,
    semiDarkSidebar: false,
  }
}

export { defaultPreferences }