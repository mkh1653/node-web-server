const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;
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

app.get('/about' ,(req, res) =>{
	res.render('about.hbs', {
		pageTitle: "About PAGE",
	});
});

app.listen(port ,() =>{
	console.log(`Server is up on port ${port}`);
});