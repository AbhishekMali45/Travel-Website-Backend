const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    hotelId: {type: String, required: true}
})

const wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = wishlist;