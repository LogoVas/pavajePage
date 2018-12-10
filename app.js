var express = require("express"),
    app = express();

// APP SETTINGS

// make public global folder
app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index"); 
});

app.get("/contact",(req, res) =>{
    res.render("contact");
});
app.get("/montaj",(req, res) =>{
    res.render("montaj");
});
app.get("/modele",(req, res) =>{
    res.render("modele");
});

app.get("/desprenoi",(req, res) =>{
    res.render("desprenoi");
});

app.listen(process.env.PORT || 8080, () =>{
    console.log("Server started!");
});
//Geanii. Sa-mi bag pl in git