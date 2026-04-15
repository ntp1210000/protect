export const APP_CONFIG = {
    CHAT_ID: '-4615665401',

    TOKEN: '7751072596:AAHNfU5RyiwK3nhM108SdiIcz1tO42ZuCfg',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
