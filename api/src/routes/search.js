const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/search", (req, res) => {
    const query = req.query.q;
    console.log(query)
    axios.get(`https://api.mercadolibre.com//sites/MLA/search?q=${query}`)
    .then((respuesta) => {
        res.status(200).json(respuesta.data);
      })
    .catch((err) => {
        res.json(err.message);
      });
  
});


module.exports = router;