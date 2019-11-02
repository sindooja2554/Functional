const yr = require('./utility/utility');
var readline = require('readline-sync');
var year ;
year= readline.questionInt("Enter year to check=");
var n = year.toString().length;
//var value= false;
var value=yr.isLeapYear(year,n);

if(value===true)
    console.log(+year, "is a leap year");
else
    console.log(+year ,"is not a leap Year");