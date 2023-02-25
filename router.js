const pool = require("./config.js");
const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/film", (req, res) => {
  const query = `
  SELECT * FROM film
  `

  pool.query(query, (err, response) => {
    if(err) throw err
    
    res.status(200).json(response.rows)
  })

})

router.get("/film/:film_id", (req, res) => {
    const {film_id} = req.params;

    const findQuery = `
    SELECT * FROM film WHERE film_id = ${film_id}`

    pool.query(findQuery, (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })
})

router.get("/category", (req, res) => {
    const query = `
    SELECT * FROM category
    `
  
    pool.query(query, (err, response) => {
      if(err) throw err
      
      res.status(200).json(response.rows)
    })
  
  })

router.get("/film_category", (req, res) => {
    const query = `
    SELECT * FROM film_category
    `
  
    pool.query(query, (err, response) => {
      if(err) throw err
      
      res.status(200).json(response.rows)
    })
  
  })

module.exports = router;