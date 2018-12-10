var express = require("express"),
    nodemailer = require("nodemailer"),
    bodyParser = require("body-parser"),
    app = express();


app.use(bodyParser.urlencoded({extended:true}));

// APP SETTINGS
// node mailer settings
transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'pavajelog@gmail.com',
        pass: 'logpavele'
    }
});

// send email
app.post("/sendEmail",(req,res)=>{

 // verify connection configuration
 transporter.verify(function(error) {
    if (error) {
        console.log(error);
        // alert("Ne cerem scuze,am intalnit o eroare, nu ezitati sa ne contactati la numarul de telefon afisat pe pagina!")
    } else {


    var data={

        name:req.body.name,
        to:'ionut20001@yahoo.com',
        subject:req.body.email+"  Telefon:"+req.body.phoneNumber,
        text:req.body.msg

    }
    try{
        transporter.sendMail( data ,function(){
            console.log("Email sent!");
            // alert("Email-ul a fost trimis cu success!");
            res.redirect("/");
        });
    }catch (e) {
        console.log(e);
    }

    }
   });
});


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

