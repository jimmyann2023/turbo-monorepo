import type {
  BuiltinThemeType,
  DeepPartial,
  ThemeModeType,
} from '@repo-core/typings';

type SupportedLanguagesType = 'en-US' | 'zh-CN';

interface AppPreferences {
  /** 是否开启灰色模式 */
  colorGrayMode: boolean;
  /** 是否开启色弱模式 */
  colorWeakMode: boolean;
  /** 是否移动端 */
  isMobile: boolean;
  /** 支持的语言 */
  locale: SupportedLanguagesType;
  /** 应用名 */
  name: string;
}

interface ThemePreferences {
  /** 内置主题名 */
  builtinType: BuiltinThemeType;
  /** 错误色 */
  colorDestructive: string;
  /** 主题色 */
  colorPrimary: string;
  /** 成功色 */
  colorSuccess: string;
  /** 警告色 */
  colorWarning: string;
  /** 当前主题 */
  mode: ThemeModeType;
  /** 圆角 */
  radius: string;
  /** 是否开启半深色header（只在theme='light'时生效） */
  semiDarkHeader: boolean;
  /** 是否开启半深色菜单（只在theme='light'时生效） */
  semiDarkSidebar: boolean;
}

interface Preferences {
  /** 全局配置 */
  app: AppPreferences;

  /** 主题配置 */
  theme: ThemePreferences;
}

type PreferencesKeys = keyof Preferences;

interface InitialOptions {
  namespace: string;
  overrides?: DeepPartial<Preferences>;
}

export type {
  AppPreferences,
  InitialOptions,
  Preferences,
  PreferencesKeys,
  ThemePreferences,
};
