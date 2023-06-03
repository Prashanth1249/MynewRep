

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items=["buy food","check food","eat food"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(request, response){
   
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);
    response.render("list",{
        Temp:day,newItemlists:items
    });
});


app.post("/",function(req,res){
     var item=req.body.newItem;
     //console.log(req.body.newItem);
     items.push(item);
     res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
