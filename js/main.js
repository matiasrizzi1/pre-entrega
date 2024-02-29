let operador = prompt ("Que operación desea hacer: \n1. Suma \n2. Resta \n3. Multiplicación \n4. División");
let numero1 = Number(prompt("Ingrese el primer número"))
let numero2= Number(prompt("Ingrese el segundo número"))
let total;

if (operador == 1){
    total=numero1 + numero2
    alert("El resultado de la suma es de "+total)
} else if(operador== 2){
    total=numero1 - numero2
    alert("El resultado de la resta es de "+total)
} else if(operador== 3){
    total=numero1 * numero2
    alert("El resultado de la multiplicacion es de "+total)
} else if (operador== 4){
    total=numero1 / numero2
    alert("El resultado de la Division es de "+total)
} else{
    alert("Opción de operación Incorrecta")
}
    
    