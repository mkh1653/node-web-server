const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + '/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear();
});

app.get('/' ,(req, res) =>{
	res.render('index.hbs', {
		pageTitle: "HOME PAGE",
		welcomeMessage: "Welcome to my website."
	});
});


app.listen(3000 ,() =>{
	console.log("Server is up on port 3000");
});