const color0 = document.getElementById("color0")
const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const score = document.getElementById("score")
const playbutton = document.getElementById("play-button")
const maxlevel = 100
const sequence = new Array(maxlevel).fill(0).map(n => Math.floor(Math.random() * 4))
var level = 1, sublevel = new Array(level)

function play() {
    playbutton.style.display = "none"
    sequenceColors()
    addEvent()
}

const sequenceColors = () => {
    for (let i = 0; i <= level - 1; i++) {
        switch(sequence[i]) {
            case 0:
                lightUp(color0)
                break
            case 1:
                lightUp(color1)
                break
            case 2:
                lightUp(color2)
                break
            case 3:
                lightUp(color3)
                break
        }
    }
}

const colorToNumber = color => {
    switch(color) {
        case "skyblue":
            return 0
            break
        case "violet":
            return 1
            break
        case "orange":
            return 2
            break
        case "green":
            return 3
    }
}

const addEvent = () => {
    color0.addEventListener("click", pickColor)
    color1.addEventListener("click", pickColor)
    color2.addEventListener("click", pickColor)
    color3.addEventListener("click", pickColor)
}

const removeEvent = () => {
    color0.removeEventListener("click", pickColor)
    color1.removeEventListener("click", pickColor)
    color2.removeEventListener("click", pickColor)
    color3.removeEventListener("click", pickColor)
}

const lightUp = color => {
    color.classList.add("light")
    setTimeout(() => color.classList.remove("light"), 1000)
}

const pickColor = event => {
    lightUp(event.target)
}
