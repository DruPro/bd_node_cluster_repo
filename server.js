let express 
    = require("express");
let app
    = express();
let path 
    = require("path");
let port 
    = 3000;

const replicaApp = process.env.APP_NAME 
app.use("/public" , express.static(path.join(__dirname + "/public")))
app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname + "/index.html"))
    console.log(`Request Completed By ${replicaApp}`)
    })

app.listen(port,()=>{
    console.log(`port is now listening on ${replicaApp}`)
})