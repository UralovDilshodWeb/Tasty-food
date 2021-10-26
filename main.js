const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

    // Remove menu mobile

const navLink  = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//  Scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home_date, .home_img, .about_data, .about_img, .services_content, .menu_content, .app_date,
             .app_img, .contact-data, .contact_button, .footer_content`, {interval: 200} )