
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var processId = 1000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Allow Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var port = process.env.PORT || 9000;
var router = express.Router();

router.get('/banks', function(req, res) {
  // Assuming that we are getting results from DB, this data must be requested from DB all the time.
  var banks = require('./result.json');
  res.json(banks.result);
});

//TODO: Move this logic to another function/module and use it in also ENOENT case
router.post('/apply', function(req, res) {
  fs.stat('foo.txt', function(err, stat) {
    if(err == null) {
      fs.readFile('applications.json', 'utf8', function readFileCallback(err, data){
        if (err){
          console.log(err);
        } else {
          // TODO: Both idArray and Id - Item hashmap should be added in order to achieve processId consistency
          var application = res.body;
          application.id = ++processId;

          db = JSON.parse(data);
          db[application.id] = application;
          json = JSON.stringify(db);
          fs.writeFile('applications.json', json, 'utf8', function(req, res){
            res.json({success: true});
          });
      }});

    } else if(err.code == 'ENOENT') {
      fs.writeFile('applications.json', json, 'utf8', callback);
    } else {
      console.log('Some other error: ', err.code);
    }
  });



});

app.use('/api', router);

app.listen(port);
console.log('Up and running on ' + port);
