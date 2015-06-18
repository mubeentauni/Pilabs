var port = 3030;
var msgs={};

/////////
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var express = require('express');
var app = express();
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');
app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/', express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    
    next();
});



app.get("/chat", function(req,res,next){
	//console.log("/");
	//var ob={"1434597380072":{"msg":"a","nick":"a","timestamp":1434597380071},"1434597380073":{"msg":"a","nick":"a","timestamp":1434597380073},"1434597380074":{"msg":"a","nick":"a","timestamp":1434597380074},"1434597380075":{"msg":"a","nick":"a","timestamp":1434597380075},"1434597380076":{"msg":"a","nick":"a","timestamp":1434597380076},"1434597380077":{"msg":"a","nick":"a","timestamp":1434597380077},"1434597380079":{"msg":"a","nick":"a","timestamp":1434597380079},"1434597380080":{"msg":"a","nick":"a","timestamp":1434597380080},"1434597380082":{"msg":"a","nick":"a","timestamp":1434597380082},"1434597540159":{"msg":"b","nick":"b","timestamp":1434597540159},"1434597546319":{"msg":"b","nick":"b","timestamp":1434597546319},"1434597563251":{"msg":"b","nick":"b","timestamp":1434597563251}};

	//get data
var collection = req.db.get('messagescollection');
collection.find({},{},function(e,docs){

    console.log(docs);
    res.send(docs);
});

	//res.send(msgs);
});
app.post("/chat/*",jsonParser,function(req,res){
	

	var path = req.params[0];
	console.log(path,req.body);
	    var collection = req.db.get('messagescollection');

    // Submit to the DB
    collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.sendStatus(200);
        }
    });
});

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);

});

// Set our collection
