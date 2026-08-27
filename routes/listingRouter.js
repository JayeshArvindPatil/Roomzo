const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middlewares.js");
const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listings.js");
const multer = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get('/search', async (req, res) => {
  try {
    const { location } = req.query;
    let listings;

    if (!location || location.trim() === '') {
      listings = await Listing.find({});
    } else {
      listings = await Listing.find({
        location: { $regex: new RegExp(location, 'i') },
      });
    }

    res.render('listings/searchResults', { listings, location });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.route("/:id")
  .get(wrapAsync(listingController.showListings))
  .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

router.get("/:id/edit", isLoggedIn, isOwner, upload.single("listing[image]"), wrapAsync(listingController.renderEditForm));

module.exports = router;