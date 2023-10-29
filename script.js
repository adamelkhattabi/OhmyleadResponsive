// JavaScript to toggle the FAQ answers
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const question = item.querySelector(".accordion-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const closeMenuIcon = document.querySelector(".close-menu-icon");
  const mainNavList = document.querySelector(".main-nav-list");

  hamburgerIcon.addEventListener("click", function () {
    mainNavList.classList.toggle("active");
    hamburgerIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
  });

  closeMenuIcon.addEventListener("click", function () {
    mainNavList.classList.toggle("active");
    closeMenuIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  });
});

$(document).ready(function () {
  // Initialize the carousels
  $(".first-carousel").owlCarousel({
    items: 4,
    navText: [
      "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
      "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
    ],
    autoplay: true, // Add this option
    autoplayTimeout: 3000, // Set the autoplay time interval in milliseconds (e.g., 3000ms for 3 seconds)
    loop: true,
    nav: true,
    dots: false, // Enable dots
    margin: 17,

    responsive: {
      0: {
        items: 1, // Display 1 item on small screens (less than 600px wide)
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
        ],
      },
      400: {
        items: 2, // Display 1 item on small screens (less than 600px wide)
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
        ],
      },
      650: {
        items: 3, // Display 2 items on medium-sized screens (768px wide and above)
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
        ],
      },

      1200: {
        items: 4,
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right.svg' alt='Next'></div>",
        ],
      },
    },
  });

  $(".second-carousel").owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    autoplay: true, // Add this option
    autoplayTimeout: 3000, // Set the autoplay time interval in milliseconds (e.g., 3000ms for 3 seconds)
    navText: [
      "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
      "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 10, // Adjust the margin for smaller screens
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
        ],
      },
      400: {
        items: 2,
        margin: 10, // Adjust the margin for smaller screens
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
        ],
      },
      650: {
        items: 3,
        margin: 10, // Adjust the margin for medium-sized screens
        navText: [
          "<div class='custom-prev'><img src='images/arrow-left-sm.svg' alt='Previous'></div>",
          "<div class='custom-next'><img src='images/arrow-right-sm.svg' alt='Next'></div>",
        ],
      },
      1024: {
        items: 4,
        margin: 20, // Adjust the margin for larger screens
        navText: [
          "<button class='custom-prev2'><img src='images/arrow-left.svg' alt='Previous'></button>",
          "<button class='custom-next2'><img src='images/arrow-right.svg' alt='Next'></button>",
        ],
      },
      1220: {
        items: 6,
        margin: 20, // Adjust the margin for larger screens
        navText: [
          "<button class='custom-prev2'><img src='images/arrow-left.svg' alt='Previous'></button>",
          "<button class='custom-next2'><img src='images/arrow-right.svg' alt='Next'></button>",
        ],
      },
    },
  });

  // Target the last carousel and enable dots and navigation
  $(".last-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    margin: 17,
    autoplay: true, // Add this option
    autoplayTimeout: 3000, // Set the autoplay time interval in milliseconds (e.g., 3000ms for 3 seconds)
    navText: [
      "<button class='custom-prev-last'><img src='images/arrow-left.svg' alt='Previous'></button>",
      "<button class='custom-next-last'><img src='images/arrow-right.svg' alt='Next'></button>",
    ],
    responsive: {
      0: {
        items: 1.2, // Display 1 item on small screens (less than 600px wide)
      },
      400: {
        items: 1.2, // Display 1 item on small screens (less than 600px wide)
      },
      600: {
        items: 1.6, // Display 2 items on medium-sized screens (768px wide and above)
      },
      800: {
        items: 2, // Display 2 items on medium-sized screens (768px wide and above)
      },

      992: {
        margin: 0,

        items: 3, // Display 3 items on large screens (992px wide and above)
      },
    },
  });
  // Function to check if the footer is in the viewport
  function isFooterVisible() {
    var footer = $("footer");
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var footerTop = footer.offset().top;
    return footerTop - 10 < scrollTop + windowHeight;
  }

  // Toggle the class to hide the header
  $(window).scroll(function () {
    if (isFooterVisible()) {
      $(".header").addClass("hide-header");
    } else {
      $(".header").removeClass("hide-header");
    }
  });
});


