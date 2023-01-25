const sumar = (num1, num2) => {
    return parseInt (num1) + parseInt (num2);
}
const restar = (num1, num2) => {
    return parseInt (num1) - parseInt (num2);
}
const dividir = (num1, num2) => {
    return parseInt (num1) / parseInt (num2);
}
const multiplicar = (num1, num2) => {
    return parseInt (num1) * parseInt (num2);
}

alert ("que operación deseas realizar")
operacion = prompt ("1: suma, 2: resta, 3: división, 4: multiplicación")

if (operacion ==1) {
    let numero1= prompt ("primer numero para sumar");
    let numero2= prompt ("primer numero para sumar");
    resultado = suma (numero1, numero2);
    alert (`tu resultado es ${resultado}`);
}
else if (operacion ==2) {
    let numero1= prompt ("primer numero para restar");
    let numero2= prompt ("primer numero para restar");
    resultado = restar (numero1, numero2)
    alert (`tu resultado es ${resultado}`);
}
else if (operacion ==3) {
    let numero1= prompt ("primer numero para dividir");
    let numero2= prompt ("primer numero para dividir");
    resultado = dividir (numero1, numero2);
}
else if (operacion ==4) {
    let numero1= prompt ("primer numero para multiplicar");
    let numero2= prompt ("primer numero para multiplicar");
    resultado = multiplicar (numero1, numero2)
    alert (`tu resultado es ${resultado}`);
}
else {
    alert ("no se encuentra un numero válido")
}
