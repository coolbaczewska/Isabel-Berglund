const navSlide = () => {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //    Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //     Burger Animation

        burger.classList.toggle('toggle');

    });
}

navSlide();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos < 100) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-7vh";
    }
    prevScrollpos = currentScrollPos;
}
