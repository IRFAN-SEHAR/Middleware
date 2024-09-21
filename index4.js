import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";
app.use(express.urlencoded({extended: true}));
function bandNamegenerator(req, res, next){
  console.Console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandNamegenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  res.send(`<h1>your band name is:</h1><h2>${bandName}</h2>`);
 console.log(req.body);
  
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
