# fizzbuzz

Assumptions

Created Web API endpoint, which takes input in the below json format

{
  "inputs":[1,3,5,15,"asdf"]
}

Response
Divided 1 by 3\n
Divided 1 by 5\n
Fizz\n
Buzz\n
FizzBuzz\n
Invalid Item\n

Error Response
{
  "errorMessage":"Invalid Input Request or Missing Mandatory Element 'inputs'"}
}
