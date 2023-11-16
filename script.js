// JavaScript to toggle the FAQ answers
const accordionItems = document.querySelectorAll(".accordion-item");

// Add "active" class to the first accordion item
accordionItems[0].classList.add("active");

accordionItems.forEach((item) => {
  const question = item.querySelector(".accordion-question");

  question.addEventListener("click", () => {
    // Close all accordion items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle the clicked accordion item
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const closeMenuIcon = document.querySelector(".close-menu-icon");
  const mainNavList = document.querySelector(".main-nav-list");
  const header = document.querySelector(".header");

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

  let lastScrollTop = 0;
  const headerHeight = header.clientHeight; // Get the height of the header

  // Function to check if the footer is in the viewport
  function isFooterVisible() {
    var footer = $("footer");
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var footerTop = footer.offset().top;
    return footerTop - 10 < scrollTop + windowHeight;
  }

  // Toggle the class to hide the header when scrolling down
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // Scrolling down
      if (!isFooterVisible()) {
        header.style.transform = `translateY(-${headerHeight}px)`;
      }
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }
    lastScrollTop = st;
  });
});

$(document).ready(function () {
  // Initialize the carousels
  $(".first-carousel").owlCarousel({
    items: 4,
    autoplay: true, // Add this option
    autoplayTimeout: 3000, // Set the autoplay time interval in milliseconds (e.g., 3000ms for 3 seconds)
    loop: true,
    nav: true,
    nav: false,
    dots: false, // Enable dots

    responsive: {
      0: {
        items: 1, // Display 1 item on small screens (less than 600px wide)
        nav: false,
      },
      400: {
        items: 2, // Display 1 item on small screens (less than 600px wide)
        nav: false,
      },
      650: {
        items: 3, // Display 2 items on medium-sized screens (768px wide and above)
        nav: false,
      },

      1024: {
        items: 5,
        nav: false,
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

    responsive: {
      0: {
        items: 1,
        margin: 10, // Adjust the margin for smaller screens
        nav: false,
      },
      400: {
        items: 2,
        margin: 10, // Adjust the margin for smaller screens
        nav: false,
      },
      650: {
        items: 3,
        margin: 10, // Adjust the margin for medium-sized screens
        nav: false,
      },
      1024: {
        items: 4,
        margin: 20, // Adjust the margin for larger screens
        nav: false,
      },
      1220: {
        items: 6,
        margin: 20, // Adjust the margin for larger screens
        nav: false,
      },
    },
  });

  // Target the last carousel and enable dots and navigation
  $(".last-carousel").owlCarousel({
    items: 3,
    loop: true,
    dots: true,
    margin: 17,
    // Add this option
    autoplayTimeout: 3000, // Set the autoplay time interval in milliseconds (e.g., 3000ms for 3 seconds)
    nav: false,
    responsive: {
      0: {
        nav: false,
        items: 1.2, // Display 1 item on small screens (less than 600px wide)
      },
      400: {
        nav: false,
        items: 1.4, // Display 1 item on small screens (less than 600px wide)
      },
      600: {
        nav: false,
        items: 1.6, // Display 2 items on medium-sized screens (768px wide and above)
      },
      800: {
        nav: false,
        items: 2.1, // Display 2 items on medium-sized screens (768px wide and above)
      },

      1024: {
        nav: false,
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

function updateDropdown1() {
  var dropdown1 = document.getElementById("dropdown");
  var planPrice1 = document.getElementById("planPrice");
  var monthlyPrice1 = document.getElementById("monthlyPrice");
  var selectedOption = dropdown1.options[dropdown1.selectedIndex].value;

  switch (selectedOption) {
    case "250":
      planPrice1.textContent = "$0.00";
      monthlyPrice1.textContent = "$0";
      break;
    case "1000":
      planPrice1.textContent = "$15.83";
      monthlyPrice1.textContent = "$19";
      break;
    case "2500":
      planPrice1.textContent = "$31.66"; // Update this value
      monthlyPrice1.textContent = "$38"; // Update this value
      break;
    // Add more cases as needed
  }
}

function updateDropdown2() {
  var dropdown2 = document.getElementById("dropdown2");
  var planPrice2 = document.getElementById("planPrice2");
  var monthlyPrice2 = document.getElementById("monthlyPrice2");
  var selectedOption = dropdown2.options[dropdown2.selectedIndex].value;

  switch (selectedOption) {
    case "5000":
      planPrice2.textContent = "$65.83";
      monthlyPrice2.textContent = "$79";
      break;
    case "10k":
      planPrice2.textContent = "$131.66";
      monthlyPrice2.textContent = "$158";
      break;
    case "25k":
      planPrice2.textContent = "$263.33";
      monthlyPrice2.textContent = "$316";
      break;
    case "50k":
      planPrice2.textContent = "$497.5";
      monthlyPrice2.textContent = "$597";
      break;
    // Add more cases as needed
  }
}

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

function filterTools(category) {
  const toolContainers = document.querySelectorAll(".tool-container");
  const buttons = document.querySelectorAll(".button-tool");

  toolContainers.forEach((toolContainer) => {
    const toolCategory = toolContainer.dataset.category;

    if (category === "all" || category === toolCategory) {
      toolContainer.style.display = "flex";
    } else {
      toolContainer.style.display = "none";
    }
  });

  // Remove the active class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add the active class to the clicked button
  buttons.forEach((button) => {
    if (category === button.textContent.trim()) {
      button.classList.add("active");
    }
  });
}
