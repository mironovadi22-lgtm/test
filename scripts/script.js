const btn = document.getElementById("button")
const links = document.querySelectorAll(".header__list-item-link")
console.log(links)
btn.addEventListener("click", func)

function func() {
   links.forEach((link) => {
    link.style.color = 'red'
   })
}

console.log(btn)