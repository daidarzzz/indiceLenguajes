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

    let num = Number(prompt("Introduce un número: "))
    for (let i = 1; i <= 10; i++) {
        
        alert("5 x " + i + " = " + (5*i))
        
    }

}

function ejercicio39() {

    let x = "5"
    let y = 5

    alert("[x == y]: " + x == y)
    alert("[x === y]: " + x === y)
    alert(x = y)
    alert("Nuevo x: " + x)

}
function ejercicio41() {

    ejercicio41_Hola()
    alert(mensaje)

}

function ejercicio41_Hola() {
    let mensaje = "Hola"
    alert(mensaje)
}

function ejercicio42() {

    let num = Number(prompt("Introduce un número: "))
    alert("El doble de " + num + " es " + doble(num))

}

function doble(n) {
    return n * 2
}


function ejercicio43() {

    let num = Number(prompt("Introduce un número: "))
    alert(esPrimo(num))

}

function esPrimo(n) {

    if (n <= 1) return false
    for (let i = 2 ; i < n ; i++) {
        if (n % i === 0) return false       
    }
    return true
 
}

function ejercicio46() {

    let alumnos = [
        {nombre: "Jacobo", nota: 1},
        {nombre: "Joaquín", nota: 5},
        {nombre: "Manuel", nota: 9}
    ]

    alert("Primer alumno: " + alumnos[0].nombre)

    alumnos.forEach(alumno => {
        alert(alumno.nombre + " tiene nota " + alumno.nota)
    }

    )

}

let nums = [10, 20, 30]
function ejercicio49() {



    nums.forEach( num => {
        alert(num)
    }

    )


}

function ejercicio50() {

    alert(nums.length)

}

function ejercicio52() {

    let frutas = ["manzana", "banana", "naranja"]
    let primeraFruta = frutas.shift()
    alert(frutas)

    let frutas2 = ["banana", "naranja"]
    frutas2.unshift("manzana", "uva")
    alert(frutas2)

}

function ejercicio53() {

    let frutas = ["manzana", "pera"]
    frutas.push("plátano")

    frutas.forEach( fruta => {
        alert(fruta)
    }

    )


}
function ejercicio54_1() {

    let lenguajes = ["HTML", "CSS", "JavaScript"]
    lenguajes.forEach(lenguaje => {
        alert(lenguaje)
    })


}

function ejercicio54_2() {

    let coche = {
        marca: "Ford",
        modelo: "Fiesta",
        año: "2018"
    }
    alert(coche.marca)

}

function ejercicio55_1() {
    let alumnos = ["Ana", "Luis", "Pedro"]
    alumnos.forEach(nombre => {
        alert(nombre)
    })
}

function ejercicio55_2() {

    let productos = []
    productos.push("camisa")
    productos.push("zapatos")
    productos.pop()
    alert(productos)

}