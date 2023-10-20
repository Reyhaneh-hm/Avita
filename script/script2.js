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

$('#comments-box').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})

AOS.init();

$('#teams-box').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

/*$(document).ready(function() {
    $('#switch').click(function () {
        if ($(this).is('.icon icon--moon')) {
            $(':root').css({
                '--replaceColor': '#a865bb',
                '--hoverColor': '#614793',
                '--background': '#212121'
            })
            // $('title').css('color','#fff')
            /!*$('.title').css('color', 'white')
            $('#company-box span').css('color', 'white')
            $('.service').css({
                boxShadow: '0 0 0 0 '
            })
            $('.comment').css({
                boxShadow: '0 0 3px 1px #e2dfdf '
            })
            $('.team').css({
                boxShadow: '0 0 0px 0px grey'
            })*!/
            /!*} else {
                $(':root').css({
                    '--primaryColor': '#cb79e1',
                    '--hoverColor': '#7757B7C6',
                    '--background': '#e8e8e8',

                })*!/
        }
    })
})*/

$(document).ready(function() {
    $("#switch").click(function() {
        $(":root").toggleClass("root , dark");
    });
});

$(function (){
    $("button").click(function (){
        if ($(this).is('#red')) {
            $(':root').css({
                '--hoverColor': '#ff0000',
                '--replaceColor': '#c90000',
                '--bgFooter': 'url("../images/footer_bg.png"),linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(112,0,0,1) 100%)',
                '--overlay': 'rgb(255, 62, 62, 50%)'
            }) }
        if ($(this).is('#orange')) {
            $(':root').css({
                '--hoverColor': '#ff8100',
                '--replaceColor': '#cd6800',
                '--bgFooter': 'url("../images/footer_bg.png"),linear-gradient(90deg, rgba(255,129,0,1) 0%, rgba(184,93,0,1) 100%)',
                '--overlay': 'rgb(255, 131, 61, 50%)'
            }) }
        if ($(this).is('#yellow')) {
            $(':root').css({
                '--hoverColor': '#dcdc00',
                '--replaceColor': '#dcb100',
                '--bgFooter': 'url("../images/footer_bg.png"),linear-gradient(90deg, rgba(255,255,0,1) 0%, rgba(190,175,0,1) 100%)',
                '--overlay': 'rgb(255, 238, 61, 50%)'
            }) }
        if ($(this).is('#green')) {
            $(':root').css({
                '--hoverColor': '#008000',
                '--replaceColor': '#00670f',
                '--bgFooter': 'url("../images/footer_bg.png"),linear-gradient(90deg, rgba(0,128,0,1) 0%, rgba(0,84,12,1) 100%)',
                '--overlay': 'rgb(149, 206, 128, 50%)'
            }) }
        if ($(this).is('#blue')) {
            $(':root').css({
                '--hoverColor': '#0000ff',
                '--replaceColor': '#0000c4',
                '--bgFooter': 'url("../images/footer_bg.png"),linear-gradient(90deg, rgba(0,0,255,1) 0%, rgba(0,0,133,1) 100%)',
                '--overlay': 'rgb(121, 118, 255, 50%)'
            }) }
        if ($(this).is('#purple')) {
            $(':root').css({
                '--hoverColor': '#7757b7',
                '--replaceColor': '#cb79e1',
                '--bgFooter': 'url("../images/footer_bg.png"), linear-gradient(90deg, rgba(203, 121, 225, 1) 0%, rgba(119, 87, 183, 1) 100%)',
                '--overlay': 'rgba(203, 121, 225, 0.5)'
            }) }
        if ($(this).is('#pink')) {
            $(':root').css({
                '--hoverColor': '#ff69b4',
                '--replaceColor': '#ff2d96',
                '--bgFooter': 'url("../images/footer_bg.png"),linear-gradient(90deg, rgba(255,105,180,1) 0%, rgba(214,0,107,1) 100%)',
                '--overlay': 'rgb(255, 103, 214, 50%)'
            }) }
    })
    $('#box-color').hide()
    $('#toggleColor').click(function (){
        $('#box-color').slideToggle(500)


    })

})
