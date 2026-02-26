
function mostrarPost() {
    const tweet = document.getElementById('tweets')
    console.log(tweet.value)

    let parrafo = document.createElement("p")
    parrafo.textContent = tweet.value
    parrafo.style.color = "white"
    parrafo.style.fontWeight = "bold"
    parrafo.style.fontSize = "2em"
    document.body.appendChild(parrafo)

}