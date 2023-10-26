const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

document.querySelectorAll(".main-nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
// JavaScript to toggle the FAQ answers
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const question = item.querySelector(".accordion-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// JavaScript code to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileNavButton = document.querySelector(".btn-mobile-nav");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileNavButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("show-mobile-menu");
  });
});

$(document).ready(function () {
  // Initialize the carousels
  $(".first-carousel").owlCarousel({
    items: 5,

    loop: true,
    nav: true,
    dots: false, // Enable dots
    margin: 17,
    navText: [
      "<button class='custom-prev-first'><img src='images/arrow-left.svg' alt='Previous'></button>",
      "<button class='custom-next-first'><img src='images/arrow-right.svg' alt='Next'></button>",
    ],
    responsive: {
      0: {
        items: 1, // Display 1 item on small screens (less than 600px wide)
      },
      768: {
        items: 2, // Display 2 items on medium-sized screens (768px wide and above)
      },
      992: {
        items: 3, // Display 3 items on large screens (992px wide and above)
      },
      1200: {
        items: 5, 
      },
    },
  });

 $(".second-carousel").owlCarousel({
   items: 6,
   loop: true,
   nav: true,
   dots: false,
   margin: 20,
   navText: [
     "<button class='custom-prev'><img src='images/arrow-left.svg' alt='Previous'></button>",
     "<button class='custom-next'><img src='images/arrow-right.svg' alt='Next'></button>",
   ],
   responsive: {
     0: {
       items: 2,
       margin: 10, // Adjust the margin for smaller screens
     },
     768: {
       items: 3,
       margin: 15, // Adjust the margin for medium-sized screens
     },
     992: {
       items: 4,
       margin: 20, // Adjust the margin for larger screens
     },
   },
 });

  // Target the last carousel and enable dots and navigation
  $(".last-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true, // Enable dots
    margin: 17,
    navText: [
      "<button class='custom-prev-last'><img src='images/arrow-left.svg' alt='Previous'></button>",
      "<button class='custom-next-last'><img src='images/arrow-right.svg' alt='Next'></button>",
    ],
    responsive: {
      0: {
        items: 1, // Display 1 item on small screens (less than 600px wide)
      },
      768: {
        items: 2, // Display 2 items on medium-sized screens (768px wide and above)
      },
      992: {
        items: 3, // Display 3 items on large screens (992px wide and above)
      },
    },
  });
});
