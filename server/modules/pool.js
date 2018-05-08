const pg = require('pg');
const Pool = pg.Pool;
const url = require('url'); 

// process.env.DATABASE_URL

let config = {};

//postgres://ecjwdhrzqcnjoo:f0ccae602d9ffbffd42f8a1180676451af46270ee290141e6104985e3deda6b0@ec2-50-19-224-165.compute-1.amazonaws.com:5432/dd90va5d47isqe

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
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