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


//数据库操作
function upload(dataObj, targetCollection, onsuccess = ()=>{}, onfail = ()=>{}) {
    var ajaxUpload = $.ajax({
        url: "https://559f0faa-50ee-4605-869c-eb432c954171.bspapp.com/database/upload/" + targetCollection, //请求的URL
        timeout: 10000, //超时时间设置，单位毫秒
        type: 'post', //请求方式，get或post
        data: JSON.stringify(dataObj), //请求所传参数，json格式
        complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'success')
                onsuccess(XMLHttpRequest.responseText);
            else
                onfail(XMLHttpRequest.responseText);
            console.log(status, XMLHttpRequest.responseText);
            ajaxUpload.abort();
        },
    });
}
function download(targetCollection, onsuccess = ()=>{}, onfail = ()=>{}) {
    var ajaxUpload = $.ajax({
        url: "https://559f0faa-50ee-4605-869c-eb432c954171.bspapp.com/database/download/" + targetCollection, //请求的URL
        timeout: 10000, //超时时间设置，单位毫秒
        type: 'get', //请求方式，get或post
        complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'success')
                onsuccess(XMLHttpRequest.responseText);
            else
                onfail(XMLHttpRequest.responseText);
            console.log(status, XMLHttpRequest.responseText);
            ajaxUpload.abort();
        },
    });
}
function check(targetCollection, onsuccess = ()=>{}, onfail = ()=>{}) {
    var ajaxUpload = $.ajax({
        url: "https://559f0faa-50ee-4605-869c-eb432c954171.bspapp.com/database/check/" + targetCollection, //请求的URL
        timeout: 10000, //超时时间设置，单位毫秒
        type: 'get', //请求方式，get或post
        complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'success')
                onsuccess(XMLHttpRequest.responseText);
            else
                onfail(XMLHttpRequest.responseText);
            console.log(status, XMLHttpRequest.responseText);
            ajaxUpload.abort();
        },
    });
}
function clear(password, targetCollection, onsuccess = ()=>{}, onfail = ()=>{}) {
    var ajaxUpload = $.ajax({
        url: "https://559f0faa-50ee-4605-869c-eb432c954171.bspapp.com/database/clear/" + targetCollection + "?password=" + password, //请求的URL
        timeout: 10000, //超时时间设置，单位毫秒
        type: 'get', //请求方式，get或post
        complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'success')
                onsuccess(XMLHttpRequest.responseText);
            else
                onfail(XMLHttpRequest.responseText);
            console.log(status, XMLHttpRequest.responseText);
            ajaxUpload.abort();
        },
    });
}