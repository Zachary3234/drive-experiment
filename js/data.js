const data = new (function DataCollect() {
    var dataCollect = {
        id : undefined,
        SVO: undefined,
        score : 0,
    }

    this.setID = function (id){
        dataCollect.id = id;
    }
    this.setSVO = function (svo){
        dataCollect.SVO = svo;
    }
    this.setScore = function (val){
        dataCollect.score = val;
    }
    this.setData = function (prop,val){
        dataCollect[prop] = val;
    }
    this.sendData = function (){
        
    }
})();