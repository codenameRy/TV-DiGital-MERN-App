const express = require("express");
const router = express.Router();
const FavoriteShows = require('../models/FavoriteShows');


router.post("/movies", (req, res, next) => {  //Listening to post from client 
    FavoriteShows.create(req.body).then(response => {
    res.json({message:"success", newTVShowID: response._id}) 
    //Back to the front end sending another message 
  }).catch(err => res.json({err}))
})

module.exports = router;
