
var celsius:number = 10;
function celsiusToFahrenheit(celsius:number): number {
    
    var fahrenheit =  (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(celsius));