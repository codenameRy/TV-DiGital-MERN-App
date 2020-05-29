const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tvShowID: { type: String },
    tvShowName: { type: String },
    tvShowImage: { type: String },
  },
  { timestamps: true }
);

const FavoriteShow = mongoose.model("FavoriteShow", favoriteSchema);

module.exports = FavoriteShow;
