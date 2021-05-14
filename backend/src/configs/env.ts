
export const envConfigs = () => ({
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRES: process.env.JWT_EXPIRES || '18880s'
});