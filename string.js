
const str = require('./utility/utility');
const readline = require('readline-sync');

var acquire = function ()
{
var username = readline.question("Enter username=");
str.SReplace(username);
}
acquire();





