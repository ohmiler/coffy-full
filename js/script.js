// JavaScript Code

function toggleHamburgerIcon(el) {
    el.classList.toggle("change");
}

const hamIcon = document.getElementById("hamIcon");
const myMenu = document.getElementById("myMenu");

hamIcon.addEventListener("click", function() {
    const navbar = document.querySelector("nav");

    if (myMenu.style.display === "flex") {
        myMenu.style.display = "none";
        navbar.style.backgroundColor = "";
    } else {
        myMenu.style.display = "flex";
        navbar.style.backgroundColor = "#66462F";
    }
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    const navbarPlaceholder = document.querySelector(".nav-placeholder");

    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("sticky");
        navbarPlaceholder.style.height = `${navbar.offsetHeight}px`;
    } else {
        navbar.classList.remove("sticky");
        navbarPlaceholder.style.height = `0`;
    }
});

// Get the button
let mybutton = document.getElementById("myBtt");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    console.log(window.scrollY)
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
    $(".coffee-slide").owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        margin: 20,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4,
            },
            1200: {
                nav: true
            }

        }
    });

    $(".dessert-slide").owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        margin: 20,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                nav: true
            }

        }
    });

    $(".customer-slide").owlCarousel({
        items: 3,
        nav: false,
        dots: true,
        dotsEach: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                nav: true
            }

        }
    });
});