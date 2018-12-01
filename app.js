var express = require("express"),
    app = express();

// APP SETTINGS

// make public global folder
app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(process.env.PORT || 8080, () =>{
    console.log("Server started!");
});