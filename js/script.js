const list = document.querySelector( selectors '.menu_btn')


list.addEventListener(type: 'click', Listener: (event) => {
    const target = event.target
})

menu_btn.onclick = (event) => {
    console.log(message:event.target)
    event.target.classList.toggle('menu_btn-active')
}