const showMenu = document.querySelector('#show-menu')
    showMenu.onclick = function () {
        //document.getElementById("box-mother-menu").classList.replace("box-mother-menu-close","box-mother-menu-open")
        document.getElementById("box-mother-menu").classList.add('box-mother-menu-close')
}

const removeMenu = document.querySelector('#remove-menu')
    removeMenu.onclick = function () {
        document.getElementById("box-mother-menu").classList.remove("box-mother-menu-close")
}
console.log()
