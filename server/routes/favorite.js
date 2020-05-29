const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");

//=================================
//             Favorite Shows
//=================================


  //Find favorite show information
router.post("/favoriteNumber", auth, (req, res) => {
  Favorite.find({ "tvShowID": req.body.tvShowID } )
  .exec((err, favorite) => {
    if (err) return res.status(400).send(err)

    res.status(200).json({ success: true, favoriteNumber: favorite.length })
})

});


//Find favorite show information using TV Show ID and UserForm
router.post("/favorited", auth, (req, res) => {

Favorite.find({ "tvShowID": req.body.tvShowID, "userFrom": req.body.userFrom })
.exec((err, favorite) => {
    if (err) return res.status(400).send(err)
    let result = false; //False means did not add tv show to favorite list
    if (favorite.length !== 0) {
        result = true //Already added this tv show to favorite list
    }

    res.status(200).json({ success: true, favorited: result })
})

});



router.post("/addToFavorite", (req, res) => {

console.log(req.body)

const favorite = new Favorite(req.body);

favorite.save((err, doc) => {
if (err) return res.json({ success: false, err })
return res.status(200).json({ success: true })
})

});


router.post("/removeFromFavorite", (req, res) => {


Favorite.findOneAndDelete({ tvShowID: req.body.tvShowID, userFrom: req.body.userFrom })
.exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc })
})
});


router.post("/getFavoredMovie", (req, res) => {

//Need to find all of the Users that I am subscribing to From Subscriber Collection 
Favorite.find({ 'userFrom': req.body.userFrom })
.exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favorites })
})
});



module.exports = router;
