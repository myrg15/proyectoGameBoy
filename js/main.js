function powerOn() {
    let screen = document.getElementById("screenInter");
    screen.classList.add("power");
}

function clickbuttonB() {
    let screen = document.getElementById("screenInter");
    screen.style.backgroundImage = "url('/imag/animeAmigosMovimiento.gif')"

}

function clickbuttonA() {
    let screen = document.getElementById("screenInter");
    screen.style.backgroundImage = "url('/imag/animeVariosJuntos.jpg')"
}

const selectA = () => {
    let screen = document.getElementById("screenInter");
    screen.style.backgroundImage = "url('/imag/animeUnaSola.jpg')"
}

function startA() {
    let screen = document.getElementById("screenInter");
    screen.style.backgroundImage = "url('/imag/pokemonAnimado.gif')"
}
