const data = new (function DataCollect() {
    var dataCollect = {
        id : undefined,
        gender: undefined,
        SVO: undefined,
        score : 0,
        '1-type': undefined,
        '1-1': undefined,
        '1-2': undefined,
        '1-3': undefined,
        '1-4': undefined,
    }

    this.addScore = function (val){
        dataCollect.score += val;
    }
    this.setID = function (id){
        dataCollect.id = id;
    }
    this.setData = function (prop,val){
        dataCollect[prop] = val;
    }
    this.sendData = function (){
        
    }
})();