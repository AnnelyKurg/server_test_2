const express = require("express");
const app= express();

app.get("/", (req, res) => {
   res.send("Hello World 1 2");
});



/*app.get("/about", (req, res) => {
   res.send("About route 2");
});*/

app.listen(3000, () => console.log("Server is listening to port 3000"));