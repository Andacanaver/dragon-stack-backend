const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

const REFRESH_RATE = 5; //units


module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    SECONDS,
    MINUTES,
    HOURS,
    DAYS,
    REFRESH_RATE
}
