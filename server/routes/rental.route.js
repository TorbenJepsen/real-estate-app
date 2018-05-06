const express = require('express');
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'real-estate',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "listings" WHERE "type" = 'rent';`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

module.exports = router;