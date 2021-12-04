const debug = true;
function speedchange() {
    var value = document.getElementById('speed').value ;
    document.getElementById('carSpeed').innerHTML = value;
    app.setSpeed(value);
}
function heightchange() {
    var value = document.getElementById('height').value ;
    document.getElementById('camHeight').innerHTML = value;
    app.setHeight(value);
}

function toggleDialog(open) {
    if (void 0 != open){
        if (open){
            $('#dialog').addClass('scale-100 opacity-100');
            $('#dialog').removeClass('scale-95 opacity-0');
        }else{
            $('#dialog').removeClass('scale-100 opacity-100');
            $('#dialog').addClass('scale-95 opacity-0');
        }
    }else{
        $('#dialog').toggleClass('scale-100 opacity-100');
        $('#dialog').toggleClass('scale-95 opacity-0');
    }
}