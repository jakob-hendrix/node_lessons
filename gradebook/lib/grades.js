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

    getAverage: function(){
        var sumOfGrades = 0;

        if (this._grades.length == 0) {
            return 0;
        }

        for (var i = 0; i < this._grades.length; i++){
            sumOfGrades += this._grades[i];
        }
        return sumOfGrades / this._grades.length;
    }
};

exports.book = gradeBook;