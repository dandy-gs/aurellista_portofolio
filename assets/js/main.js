/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*=============== MENU SHOW =================*/
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
} 

/*=============== MENU SHOW =================*/
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrrollHeader = () =>{
    const header = document.getElementById('header')
    //when the scrolll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')            
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax');

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 150, delay: .5})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, y: -150, delay: .6})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, y: -200, delay: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: .1})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.about__data, .celebrate__img', {origin: 'right'})
sr.reveal('.about__img, .celebrate__data', {origin: 'left'})
sr.reveal('.send__card, .', {interval: 100})
sr.reveal('.footer')

/*=============== TYPED ===============*/
let typingText = new Typed("#text", {
    strings : ['Gressika Aurellista', 'Mahasiswa Pendiikan Matematika', 'Tutor Matematika', 'Menerima Pesanan Rajutan Tangan'],
    loop : true,
    typedSpeed : 100,
    backSpeed : 50,
    backDelay : 1000, 
})

// /*=============== Contact ===============*/
// $('.sliderlogo').slick({
//     arrow: false,
//     dots: false,
//     infinite: false,
//     autoplay: false,
//     speed: 300,
//     sliderToShow: 5,
//     sliderToScroll: 1,
//     responsive: [{
//         breakpoint: 1024,
//         settings: {
//             sliderToShow: 4,
//             sliderToScroll: 1,
//             infinite: true,
//             dots: false,
//         }
//     },{
//         breakpoint: 600,
//         settings: {
//             sliderToShow: 2,
//             sliderToScroll: 1,
//         }
//     },]
// })
