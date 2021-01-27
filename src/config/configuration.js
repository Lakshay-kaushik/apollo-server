import pkg from 'dotenv';
const { config } = pkg;
config();
const envVars = process.env;
const configuration = Object.freeze({
    PORT: envVars.PORT,
    nodeEnv: envVars.NODE_ENV,
    SERVICE_URL: envVars.SERVICE_URL
});

export default configuration;