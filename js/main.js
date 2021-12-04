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

function toggleDialog() {
    $('#dialog').toggleClass('scale-100 opacity-100');
    $('#dialog').toggleClass('scale-95 opacity-0');
}