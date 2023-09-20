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

$('#filter a').click(function () {
    // alert('salam')
    let className = $(this).attr('class')

    // console.log(className)
    $('a.active').removeClass('active');
    $(this).addClass('active')

    if (className === 'all') {
        $('.item').fadeIn(500)
    }else{
        $('.item').hide().filter('.'+className).fadeIn(500)

    }
    return false;
})


$('#top-menu li').hover(function () {
    $(this).children('ul').stop(true).show('slow')
},function () {
    $(this).children('ul').stop(true).hide('slow')
})

