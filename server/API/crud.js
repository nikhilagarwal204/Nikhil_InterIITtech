require("../db/conn");
const express = require("express");
const router = express.Router();
const video = require("../model/Videos");

function custom_sort(a, b) {
  a = a.date;
  b = b.date;
  a = a.split('-');
  b = b.split('-');
  return b[0] - a[0] || b[1] - a[1] || b[2] - a[2];
}

router.get("/", (req, res) => {
  return res.json({
    "Videos Fetching from MongoDB in Paginated format with Page limit of 6":"https://dance-gallery-backend.herokuapp.com/videos?page=1",
    "Update MongoDB via YouTube API with 4 more videos":"https://dance-gallery-backend.herokuapp.com/update",
    "Return current total count of videos in MongoDB": "https://dance-gallery-backend.herokuapp.com/count"
  });
});

router.get("/videos", (req, res) => {
  const page = req.query.page;
  const limit = 6;
  const startindex = (page - 1) * limit;
  var listvideos = [];
  if (page > 0) {
    video.find()
      .limit(limit)
      .skip(startindex)
      .then((foundone) => {
        foundone.map((videoobject) => {
          listvideos.push(videoobject);
        });
        return res.json(listvideos.sort(custom_sort));
      });
  } 
  else {
    res.send("No Such Page Exists");
  }
});


router.get("/count", (req, res) => {  
  video.count({}, function(error, numOfDocs) {
    return res.json(numOfDocs);
  });
});


router.get("/update", async (req, res) => {
  const {google} = require('googleapis');
  google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'lyrical dance',
    maxResults: 4
  }).then(resp => {
    const {data} = resp;
    data.items.forEach(async item => {
      let dat = {
        "date": item.snippet.publishedAt.split("T")[0],
        "title": item.snippet.title,
        "name": item.snippet.channelTitle,
        "description": item.snippet.title,
        "url": "https://youtu.be/"+item.id.videoId
      }
      const vid = new video(dat);
      await vid.save();
    });
  }).catch(err => {
    console.log(err);
  })
  return res.send("DB Updated");
});

module.exports = router;
