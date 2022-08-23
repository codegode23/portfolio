let navbar = document.querySelector('.header .header-2 .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
}


window.onscroll = () => {
    if(window.scrollY > 10) {
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

const home = document.querySelectorAll(".home");

const checkHome = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    home.forEach((box) => {
        const homeTop = home.getBoundingClientRect().top;
        if(homeTop < triggerBottom)box.classList.add("show")
        else home.classList.remove("show");
        
    });
}


window.addEventListener("scroll", checkHome);
checkHome();

// $(document).ready(function(){

//     $('#menu-bar').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('load scroll',function(){

//         $('#menu-bar').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         $('section').each(function(){

//             let top = $(window).scrollTop();
//             let height = $(this).height();
//             let id = $(this).attr('id');
//             let offset = $(this).offset().top - 200;

//             if(top > offset && top < offset + height){
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find(`[href="#${id}"]`).addClass('active');
//             }

//         });

//     });

//     $('.list .btn').click(function(){
//         $(this).addClass('active').siblings().removeClass('active');
//         let src = $(this).attr('data-src');
//         $('.menu .row .image img').attr('src',src);
//     });

// });


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});