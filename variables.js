var x = 3,
    y = 2.5;

var type = typeof y;
var z = "3";
var test = z > x;
var answer = x + z;

var write = function(message) {
    console.log(message);
};


var writeGreeting = function(name) {
    var message = "Hello, " + name;
    write(message);
};


var args = process.argv;

write("The arguments to this run are: " + args);
writeGreeting("Carlos");
write(answer);
write(typeof answer);
write(type);
write(typeof z);
write(test + " is a value of type " + typeof test);
write(typeof console.log);