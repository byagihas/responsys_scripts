const fs = require('fs');
const commander = require('commander');

let nameValuePayload = "TEST";
let parsedPayload = JSON.parse(nameValuePayload);

console.log(parsedPayload);

let firstString ="{
        "name": "DropOffCity",";
          S
let secondString =",
          "value": "College Park"
          },"