// 实用函数库
Array.prototype.shuffle = function () {
    var tempArray = [];
    while(this.length>0){
        tempArray.push(this.randomPop());
    }
    while(tempArray.length>0){
        this.push(tempArray.pop());
    }
    return this;
}
Array.prototype.removeItem = function (item) {
    var ind = this.indexOf(item);
    if (ind >= 0) {
        this.splice(ind, 1);
        return true;
    }
    return false;
}
Array.prototype.randomPush = function (...item) {
    this.splice(Math.floor(Math.random() * (this.length+1)),0,...item);
    return this.length;
}
Array.prototype.randomPop = function () {
    return this.splice(Math.floor(Math.random() * this.length),1)[0];
}
Array.prototype.randomPick = function () {
    return this[Math.floor(Math.random() * this.length)];
}
Array.prototype.sum = function(fn) {
    var sumval = 0;
    this.forEach(ele => {
        sumval += fn?fn(ele):ele;
    });
    return sumval;
}