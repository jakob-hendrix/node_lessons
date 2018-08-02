var gradeBook = {

    _grades: [],    //"_" is a convention that the member is private
    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },


    reset: function(){
        this._grades = [];
    },


    getCountOfGrades: function(){
        return this._grades.length;
    },


    getSumOfGrades: function(){
        var sumOfGrades = 0;
        for (var i = 0; i < this._grades.length; i++){
            sumOfGrades += this._grades[i];
        }
        return sumOfGrades
    },


    getAverage: function(){
        if (this._grades.length == 0) {
            return 0;
        }
        return this.getSumOfGrades() / this._grades.length;
    },

    getLetterGrade: function(){
        var gradeAverage = this.getAverage();

        if (gradeAverage >= 90) {
            return 'A';
        } 
        else if (gradeAverage >= 80) {
            return 'B'
        }
        else if (gradeAverage >=70) {
            return 'C'
        } 
        else if (gradeAverage >= 60) {
            return 'D'
        } 
        else {
            return 'F'
        };
    }
};

exports.book = gradeBook;