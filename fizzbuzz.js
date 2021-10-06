function fizzbuzz(value) {    
    if(!Number.isInteger(value))  return "Invalid Item\n";
    return value % 15 == 0 ? "FizzBuzz\n" :
    value % 3 == 0  ? "Fizz\n"     : 
    value % 5 == 0  ? "Buzz\n"     : 
    "Divided " + value.toString() + " by 3\n" + "Divided " + value.toString() + " by 5\n"
}

module.exports.processResponse = (json, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    json.forEach((input) => {
        response.write(fizzbuzz(input));
    });
    return response;
};