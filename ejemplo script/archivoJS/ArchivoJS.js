
var miVariableString="Hola Curso"

numInt=10

var numFloat = 0.5

numNeg= -6.4

var d= new Date()

resSuma= numInt + numNeg

function sumarFuncion(){

y=21
x=40
z= x*y
return z
}

j = sumarFuncion ()

function MultiplicarRara(ent1, ent2){
   
    k= ent1 + ent2
   
    return k

}

k = MultiplicarRara (4,"a")

document.getElementById("varString").innerHTML = miVariableString
document.getElementById("varInt").innerHTML = numInt
document.getElementById("varFloat").innerHTML = numFloat
document.getElementById("Fecha").innerHTML = d
document.getElementById("varNumNeg").innerHTML = numNeg
document.getElementById("resSuma").innerHTML = resSuma
document.getElementById("multiFuncion").innerHTML = k
document.getElementById("sumaFuncion").innerHTML = j