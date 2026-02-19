function azul() {

    document.body.style.backgroundColor = "lightblue"

}

function rojo() {

    document.body.style.backgroundColor = "red"

}
num = 1

document.getElementById("but").onclick = function() {

    if (num == 1) {
        azul()
        num++ 
    } else {
        rojo() 
        num--
    }

}
