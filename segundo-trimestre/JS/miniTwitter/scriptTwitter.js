let listaTweets = [] 

function mostrarPost() {
    let tweet = document.getElementById('tweets')
    console.log(tweet.value)

    let parrafo = document.createElement("p")
    parrafo.classList.add("tweet")
    parrafo.textContent = tweet.value
    parrafo.style.color = "white"
    parrafo.style.fontWeight = "bold"
    parrafo.style.fontSize = "2em"
    document.body.appendChild(parrafo)
    listaTweets.push(tweet)
}

function crearPost() {
    let tweet = document.getElementById('tweets')
    listaTweets.unshift(tweet)
}

function eliminarPost() {
    listaTweets.forEach(element => {
        alert(element.value)
    });
}