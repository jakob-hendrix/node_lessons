var die = {
    size: 6,    ///default is a 6-sided
    totalRolls: 0,
    lastRoll: null,
    roll: function(){
        var result = Math.ceil(this.size * Math.random());
        this.totalRolls += 1;
        this.lastRoll = result;
        return result;
    }
};

exports.die = die;