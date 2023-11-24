
const colors = [
    "red",
    "yellow",
    "green",
    "#232323",
    "blue"
]

function changeBtnColor() {

    const btnDinamin = document.getElementById("btn-dinamic");
    const number = Math.floor(Math.random() * colors.length)
    btnDinamin.style = `background-color: ${colors[number]}`

}