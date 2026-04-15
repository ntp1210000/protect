export const APP_CONFIG = {
    CHAT_ID: '1261037261',

    TOKEN: '8134902426:AAGKIcamw3b_KYkKlLGvznKiPbaKu_3qU2g',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
