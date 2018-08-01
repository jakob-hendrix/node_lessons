var book = require("../lib/grades").book;

/* This will make sure the gradebook is pristine prior to each test
*/
exports["setUp"] = function(callback) {
    book.reset();
    callback();
};

exports["Can clear the gradebook"] = function(test){
    var count = book.getCountOfGrades();

    test.equal(count, 0);
    test.done(); //test is finished
};


exports["Can add new grade"] = function(test){
    book.addGrade(90);
    var count = book.getCountOfGrades();

    test.equal(count, 1);
    test.done(); //test is finished
};


exports["Can average grades"] = function(test){
    book.addGrade(100);
    book.addGrade(50);

    var average = book.getAverage();
    test.equal(average, 75);
    test.done();
};


exports["Average of no grades is 0"] = function(test){
    var average = book.getAverage();
    test.equal(average, 0);
    test.done();
};