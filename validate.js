//Validating input request - Assuming input json shoudd be { "inputs":[ array elements]}
module.exports.processRequest = (data) => {    
    if (typeof data === "undefined") {
      return '{\"errorMessage\":\"Invalid Input Request or Missing Mandatory Element \'inputs\'\"}';
    } 
    console.log('Validation looks good ...');
};