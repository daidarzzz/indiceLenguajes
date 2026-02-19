function ejercicio20() {

    alert("Hola desde JavaScript")

}


function ejercicio32() {
    let valor = "123abc"
    let numero = parseInt(valor)
    alert("El resultado es " + numero)
}

function ejercicio33_1() {
    let texto = "Hola"
    let numero = 10
    let activo = true 
    let indefinido
    let vacio = null

    console.log("Texto: ", typeof texto)
    console.log("numero: ", typeof numero)
    console.log("activo: ", typeof activo)
    console.log("indefinido: ",  indefinido)
    console.log("vacio: ",  vacio)

    let valor = "123abc"
    let num = parseInt(valor)
    console.log(num)

}

function ejercicio33_2() {

    let a = Number(prompt("Introduce el primer número: ")) 
    let b = Number(prompt("Introduce el segundo número: ")) 

    alert("SUMA: " + (a+b))
    alert("RESTA: " + (a-b))
    alert("MULTIPLICACIÓN: " + (a*b))
    alert("DIVISIÓN: " + (a/b))

}

function ejercicio34() {
    let c = Number(prompt("Introduce una temperatura en Celsius: "))
    let f = (c * 9/5) + 32
    alert("Celsius: " + c + ", Fahrenheit: " + f)
}

function ejercicio35() {
    let edad = Number(prompt("Introduce tu edad: "))

    if (edad >= 18) {
        alert("Eres mayor de edad")
    } else {
        alert("Eres menor de edad")
    }
    
}

function ejercicio36() {
    let dia = prompt("Introduce dia (lunes, viernes u otro): ")

    switch (dia.toLowerCase()) {
        case "lunes": 
            alert("Inicio de semana")
            break
        case "viernes":
            alert("Final de semana")
            break
        default:
            alert("Día normal")
    }
    
}

function ejercicio38_1() {
    
    let num = Number(prompt("Introduce un número: "))

    if (num % 2 == 0) alert("TU NÚMERO ES PAR")
    else alert("TU NÚMERO ES IMPAR")
    
}

function ejercicio38_2() {
    
    let nota = Number(prompt("Introduce tu nota del último exámen: "))

    if (nota >= 9) alert("Tienes un sobresaliente")
    else if (nota >= 7) alert("Tienes un notable")
    else if (nota >= 5) alert("Tienenes un aprobado")
    else alert("Has suspendido")
    
}

function ejercicio38_3() {

    nombre = ""
    do {

        nombre = prompt("Introduce un nombre: ")

    } while (nombre != "fin")
    
}

function ejercicio38_4() {

    
    
}