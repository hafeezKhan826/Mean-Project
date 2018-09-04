var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Video = require('../models/video');


const db = 'mongodb://hafeez_planA:hafeez1@ds016128.mlab.com:16128/videoplayer';
// Avoid warnings that mongoose might throw
mongoose.Promise = global.Promise;

mongoose.connect(db, (error) => {
  if (error) {
    console.log('Unable to connect', error);
  } else {
    console.log('DB is: ', db);
  }
})
router.get('/', function (req, res) {
  res.send('api works');
});

router.get('/videos', function (req, res) {
  console.log('For All videos');
  Video.find({})
    .exec((error, videos) => {
      if (error) {
        console.log('Error While fetching data', error);
      } else {
        res.json(videos);
      }
    });
});


router.get('/videos/:id', function (req, res) {
  console.log('For single videos');
  Video.findById(req.params.id)
    .exec((error, videos) => {
      if (error) {
        console.log('Error While fetching data');
      } else {
        res.json(videos);
        console.log(videos);
      }
    });
});

router.post('/video', function (req, res) {
  console.log('Entering');
  var newVideo = new Video;
  /* newVideo = {
    title: req.body.title,
    url: req.body.url,
    description: req.body.description
  } */
  console.log(newVideo.hasOwnProperty('title'));
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  console.log(req.body.description, newVideo.description, newVideo);
  newVideo.save(function (err, insertedVideo) {
    if (err) {
      console.log('Error while insertion');
    } else {
      console.log('Insertion Successful');
      res.json(insertedVideo);
    }
  })
});

router.put('/video/:id', (req, res) => {
  Video.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description
    }
  }, {
    new: true,
  }, (err, updatedVideo) => {
    if (err) {
      console.log('Error while updation');
    } else {
      res.json(updatedVideo);
    }
  })
});

router.delete('/video/:id', (req, res) => {
  Video.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
    if (err) {
      console.log('Error while delete');
    } else {
      res.json(deletedVideo);
    }
  })
})

module.exports = router;
