const express = require("express");
const fizzbuzz = require("./fizzbuzz");
const validate = require("./validate");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app
.post("/api/fizzbuzz", (request, response) => {
      var data = request.body.inputs;      
      var result = validate.processRequest(data);
      if(typeof result !== 'undefined') {
        response.writeHead(400, { "Content-Type": "application/json" }).write(result);
      } else {
        fizzbuzz.processResponse(data, response);          
      }
      response.end();
  })
  .listen(port, () => console.log(`Listening to Port ${port}...`)); 