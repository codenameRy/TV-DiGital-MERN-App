const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const favoriteSchema = new Schema(
  {
    tvShowID: { type: String },
    tvShowName: { type: String },
    tvShowImage: { type: String }
  },
  { timestamps: true }
);
 
const FavoriteShow = mongoose.model('FavoriteShow', favoriteSchema);
 
module.exports = FavoriteShow;