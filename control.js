var getDieRoll = function(dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
};

/*var things = [1, 2, 3, "pizza"];
things.forEach(element => {
    console.log(element);
});
*/

for (var i = 0; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

for (var i = 1; i <= 10; i++) {
    var roll = getDieRoll(6);
    console.log("roll number " + i + ": result = " + roll);
    if (roll >= 4) {
        console.log("*");
    } else {
        console.log("-");
    }
}