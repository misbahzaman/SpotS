let card = document.querySelector(".card")
let cardImg = card.querySelector("img")

card.addEventListener("click", () => {
    window.location.href = './rankingList.html'
})

function searchFuncCat() {
    let input = document.getElementById("inputText")
    let toSearch = input.value.toUpperCase()
    let list = document.querySelector("#mainList")
    let innerCard = document.querySelectorAll(".card")

    for (let i = 0; i < innerCard.length; i++) {
        let headings = innerCard[i].getElementsByTagName("h1")
        let actualText = headings[0].textContent.toUpperCase();

        if (actualText.indexOf(toSearch) > -1) {
            innerCard[i].style.display = ""
        } else {
            innerCard[i].style.display = "none"
        }
    }
}