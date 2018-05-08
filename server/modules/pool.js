const pg = require('pg');
const Pool = pg.Pool;

// process.env.DATABASE_URL

let config = {};

if (process.env.DATABASE_URL) {

} else {
    //not on heroku, no process.env.DATABASE_URL
    config = {
        database: 'real-estate',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    };
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Postresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

module.exports = pool;