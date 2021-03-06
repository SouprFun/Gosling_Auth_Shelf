const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "item";'
  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  }).catch(error => {
    res.sendStatus(500)
  });
 // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('user id=',req.user.id, 'item id=',req.params.id);
  const query = `DELETE FROM "item" WHERE item.id=$1 AND item.user_id=$2;`
  console.log('req.params.id and userid =', req.params.id, req.user.id);
  pool.query(query,[req.params.id,req.user.id])
    .then(response =>{
      res.sendStatus(200);
    }).catch(err =>{
      console.log('ERROR in DELETE', err);
      res.sendStatus(500);
    })
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
