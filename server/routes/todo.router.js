const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "todo";`;
    pool.query(queryText)
    .then((result) => {
        console.log('GET /todo successful');
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET /todo error', error);
        res.sendStatus(500);
    })
})
// POST
router.post('/', (req, res) => {
    let todo = req.body;
    let queryText = `
    INSERT INTO "todo" ("objective")
    VALUES ($1);
    `;
    pool.query(queryText, [todo.objective])
    .then((result) => {
        console.log('Successful POST')
        res.sendStatus(200);
    }).catch((error) => {
        console.error('POST req', error);
        res.sendStatus(500);
    })
})

// PUT

// DELETE

module.exports = router;
