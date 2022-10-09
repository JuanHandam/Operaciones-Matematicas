function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;
    alert ("Este algoritmo realiza una suma de dos valores ingresados  por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer numero para sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo numero para sumar"));

    suma= A + B;
    alert ("El resultado de la suma es" +suma);

}

function operaciones(){
    var A = 0;
    var B = 0;
    var  suma,resta,multi,divi;
alert ("Este algoritmo realiza una suma,resta,multiplicacion,division");

A = parseInt(prompt("Porfavor escriba el primer numero para hacer los calculos"));
B = parseInt(prompt("Porfavor escriba el segundo numero para hacer los calculos"));

suma =   A + B;
resta =  A - B;
multi = A * B;
divi = A / B;

alert("El resultado de la suma es" + suma);
alert("El resultado de la rest es" + resta);
alert("El resultado de la multi es" + multi);
alert("El resultado de la divi es" + divi);
}



function NMA(){
var A = 0;
var B = 0;
var NM = 0;
alert("Este algoritmo determina el mayor de dos números ingresados Por el usuario");

A = parseFloat(prompt("Por favor ingrese el primer numero"));
B = parseFloat(prompt("Por favor ingrese el segundo numero"));
NM = A>B;
if (A>B) {
    alert ("El primer numero es mayor");
} 
else {
    alert ("El segundo numero es mayor");
}
}


function NME(){
var A = 0;
var B = 0;
var C = 0;
var D = 0;
alert("Este algoritmo determina el menor de tres numeros ingresados Por el usuario");

A = parseFloat(prompt("Por favor ingrese el primer numero"));
B = parseFloat(prompt("Por favor ingrese el segundo numero"));
C = parseFloat(prompt("Por favor ingrese el tercer numero"));

if ((A<=B) && (A<=C)) {
    alert ("El primer numero es menor");
}
else if ((B<=A) && (B<=C)) {
    alert ("El segundo numero es menor");
}
else if ((C<A) && (C<B)) {
    alert ("El tercer numero es menor");
}
}



function PAR(){
    var A = 0;
    var B = 0;
    var parimpar = 0;

    A = parseInt(prompt("Ingrese el primer valor a comparar"));
   

    parimpar=A<B;
    
    if ((A %2)===0){
        alert("El valor es par");
    }
    else{
        alert("El valor es impar");
    }
}





function elevado(){
    var numero=0;
    var resultado=0;
    alert("Este algoritmo se realiza para determinar el cuadrado de un numero");
    numero =parseInt(prompt("Por favor ingrese el numero para sacar su cuadrado"));
    resultado=numero*numero;
    alert("El cuadrado numero es:"+resultado);






}
function area(){
    var base = 0;
    var altura = 0;
    var resultado = 0;

    base = parseInt(prompt("Por favor ingrese el numero base"));
    altura = parseInt(prompt("Por favor ingrese el numero altura"));
    resultado=(base*altura)/2;
alert ("El area de un triangulo es:"+resultado);
}





function cenmetr(){
    var metros=0;
    var resultado=0;
    metros = parseInt(prompt("Porfavor ingrese el numero en metros"));
    resultado = metros*100;
    alert ("El resultado en centimetros es"+resultado);
}


function edad(){
    var edad=0;
    var resultado=0;
    var añoact=0;


    edad= parseInt(prompt("Porfavor ingrese su edad"));
    añoact=parseInt(prompt("Porfavor ingrese el año actual"));

    resultado=añoact-edad;

    alert("El año que usted nacio es:"+resultado);
}

function inversion(){
    var inversion = 0;
    var resultado = 0;
    var tiempo = 0;
   

    inversion=parseInt(prompt("Porfavor escriba el valor de su inversion"));
    tiempo = parseInt(prompt("Porfavor escriba los años que lleva la inversion"));
   resultado=(inversion*24/100)*tiempo;

   

alert("Las ganancias de interes es:" +resultado);
alert("La suma de su capital con los intereses es:" +(resultado+inversion))
}

function notas(){
    var notaa, notab,notac, notad, notae =0;
    var todas=0
    
   notaa=parseInt(prompt("Porfavor escriba la primera nota"));
   notab=parseInt(prompt("Porfavor escriba la segunda nota"));
   notac=parseInt(prompt("Porfavor escriba la tercera nota"));
   notad=parseInt(prompt("Porfavor escriba la cuarta nota"));
   notae=parseInt(prompt("Porfavor escriba la quinta nota"));
   todas=(notaa+notab+notac+notad+notae)/5;
    if (todas<30) {
        alert("Pierde la materia"+todas);
        
    }
    else{
        alert("Pasa la materia")


    }
    

}

function manzanas(){
    var A = 0;
    var B = 0;
    var C = 0;
    var D = 0;
    alert("Este algoritmo mostrara el descuento que tiene un usuario Por la compra de unas manzanas")

    A = parseInt(prompt("Por favor digite cuantos kilos de manzanas compro"));

    if(A<3){
       D = A * 4500

    }
    else if(A<5){
        B = A * 4500
        C = B * 0.10
        D = B - C
    } 
    else if(A<10){
        B = A * 4500
        C = B * 0.15
        D = B - C
    }
    else{
        B = A * 4500
        C = B * 0.20
        D = B - C
    }
    alert("El valor total que debe pagar Por las manzanas es: " + D)
}