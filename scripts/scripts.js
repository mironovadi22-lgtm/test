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
      document.body.style.overflow = 'hidden'
   } else {
      burgerButton.src = './images/Hamburger.svg'
      document.body.style.overflow = 'unset'
   }
   isBurgerMenuClose = !isBurgerMenuClose
   burgerListMenu.classList.toggle("header__right_active")
}
