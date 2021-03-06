const express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.get("/Arduino",function(req , res){
	res.render("Arduino");
});

app.get("/elements",function(req , res){
	res.render("elements");
});

app.listen(PORT, function(){
	console.log(`Listening on ${ PORT }`)
});
