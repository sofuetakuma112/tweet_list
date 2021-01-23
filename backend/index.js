const Twitter = require('twitter');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const client = new Twitter({
  consumer_key: 'LPohmCzSeQSiRFapjq6P2Qj59',
  consumer_secret: 'yGn4d2I8b1f7T0xYhqFBZnY2YO7koKdvYfjmnWBbdHjlY24krE',
  access_token_key: '1322605498135293953-Gu7kmW7mGKIqm3ocX678bin099LPgu',
  access_token_secret: 'BzvGSuCsbJo4bXTlRc1nM6jKtu5xvGrOks80Tnid4FWVc',
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/fetchTweet', function(req, res) {
  client.get('/statuses/lookup', { id: req.body.id }, function(error, tweets, response) {
    if (!error) {
      res.send({
        tweets,
      });
    } else if (error) {
      console.log(error);
    }
  });
});

app.listen(process.env.PORT || 3001);
