// Dice rolling sample to present functions

var dieSize = process.argv[2]
var iteration = process.argv[3];
var roll, rollCount, sumOfRolls;

var rollDice = function(size){
    return Math.ceil(Math.random() * size);
};


var showResult = function(count, result){
    print(result);
};


var print = function(message){
    console.log(message);
};


// Start here

print("Rolling " + iteration + "d" + dieSize);

sumOfRolls = 0;
for (rollCount = 1; rollCount <= iteration; rollCount++){
    roll = rollDice(dieSize);
    sumOfRolls += roll;
    showResult(rollCount, roll);
};

print("\nSum of rolls = " + sumOfRolls);