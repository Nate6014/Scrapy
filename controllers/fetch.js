
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No articles"
          });
        }
        else {
          res.json({
            message: "Found " + dbHeadline.length + "articles"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Done!"
        });
      });
  }
};
