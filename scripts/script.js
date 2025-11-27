// const btn = document.getElementById("button")
// const links = document.querySelectorAll(".header__list-item-link")
// console.log(links)
// btn.addEventListener("click", func)

// function func() {
//    links.forEach((link) => {
//     link.style.color = 'red'
//    })
// }

// console.log(btn)

const burgerButton = document.getElementById('burger-button')
const burgerListMenu = document.getElementById('burger-list-menu')
const burgerMenuItems = document.querySelectorAll('#burger-menu-item')
const button = document.getElementById('button')
burgerButton.addEventListener('click', burgerTrigger)
const burgerMenuItemsArr = Array.from(burgerMenuItems)
burgerMenuItemsArr.push(button)

burgerMenuItemsArr.forEach(item => {
   item.addEventListener('click', burgerTrigger)
})

let isBurgerMenuClose = true



function burgerTrigger() {
   if (isBurgerMenuClose) {
      burgerButton.src = './images/Cross.svg'
   } else {
      burgerButton.src = './images/Hamburger.svg'
   }
   isBurgerMenuClose = !isBurgerMenuClose
   burgerListMenu.classList.toggle("header__right_active")
}


const h1 = document.createElement("h1")