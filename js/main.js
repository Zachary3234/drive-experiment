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