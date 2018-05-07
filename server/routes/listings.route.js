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
    pool.query(`SELECT * FROM "listings" WHERE "type" = 'sale';`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
});


router.post('/', (req, res) => {
    const listing = req.body;
    pool.query(`INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
                VALUES ($1, $2, $3, $4, $5);`, [listing.cost, listing.sqft, listing.type, listing.city, listing.image_path])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error with SQL INSERT', error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const listing = req.query.id;
    pool.query(`DELETE FROM "listings" WHERE "id" = ${listing}`)
        .then((results) => {
            res.send(results.rows);

        })
        .catch((error) => {
            console.log('error with SQL DELETE', error);
            res.sendStatus(500);
        })
})

// another way to delete with "route params"
// router.delete('/:id', (req, res) => {
//     const listing_id = req.params.id;
//     let queryText = 'DELETE FROM "listings" WHERE "id" = $1';
//     pool.query(queryText, [listing_id]).then ((result) =>
//     res.sendStatus(200)
// )});

module.exports = router;