var os = require('os');
//require - allows us to pull in more code than we would normally
//have access to, by searching for a module to add, and then returning
//the object that represents all the code that is available in the OS module



var message = 'This script is running on Node.js ' +
process.version +
' on a ' +
os.type() +
'-based operating system.';


console.log(message);