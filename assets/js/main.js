function convertirFahrenheit(){
    var numCel=document.getElementById('celsius').value;
    var fahrenheit=(9/5*numCel)+32;
    document.getElementById('fahrenheit').value=fahrenheit;

}

function convertirCelsius(){
    var numFah=document.getElementById('fahrenheit').value;
    var celsius=(numFah-32)*5/9;
    document.getElementById('celsius').value=celsius;
}
