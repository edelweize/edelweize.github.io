// main.js: the behavior of the website.
// Order: 1. Footer year  2. Mobile menu  3. Active nav link  4. Fade-in on scroll


// 1. FOOTER YEAR ---------------------------------------------------------------
// EXERCISE 7: write the two lines that put the current year in the footer.
const yearElement = document.querySelector("#year");
yearElement.textContent = new Date().getFullYear();

// 2. MOBILE MENU ---------------------------------------------------------------
// Find the two elements this feature works with.
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

// The button's labels are written in the HTML (data-label-open, data-label-close),
// so each language version of the site can use its own words.
const openLabel = menuToggle.dataset.labelOpen;
const closeLabel = menuToggle.dataset.labelClose;

// Opens the menu if it is closed, closes it if it is open.
function toggleMenu() {
  // classList.toggle adds the class if it is missing and removes it if it is there.
  // It returns true when the class was added, so isOpen tells us the new state.
  const isOpen = navList.classList.toggle("is-open");

  // Keep the button's description in sync for screen readers.
  menuToggle.setAttribute("aria-expanded", isOpen);
  if (isOpen) {
    menuToggle.setAttribute("aria-label", closeLabel);
  } else {
    menuToggle.setAttribute("aria-label", openLabel);
  }
}

// Closes the menu. Used after a link is chosen.
function closeMenu() {
  navList.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", openLabel);
}

// Run toggleMenu every time the button is clicked.
menuToggle.addEventListener("click", toggleMenu);

// Close the menu when any link inside it is clicked.
navList.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    closeMenu();
  }
});


// 3. ACTIVE NAV LINK -----------------------------------------------------------
// Highlights the nav link of the section currently on screen.
const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll("main section[id]");

// An IntersectionObserver watches elements and reports when they enter or
// leave an area of the screen. rootMargin shrinks that area to a thin band
// in the middle of the screen, so only one section is "inside" at a time.
const navObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const currentId = "#" + entry.target.id;

      // Give "active" to the matching link and remove it from the others.
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(function (section) {
  navObserver.observe(section);
});


// 4. FADE-IN ON SCROLL ---------------------------------------------------------
// Every section's content block fades in the first time it enters the screen,
// so the eye is led to the section that has just arrived.
// The hero is skipped so the top of the page is visible immediately.
const revealBlocks = document.querySelectorAll("main section:not(#hero) .container");

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");

      // Stop watching this block: the animation only needs to run once.
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: "0px 0px -10% 0px" });

// The class "reveal" is added here, not in the HTML. If this script does not
// run, the blocks are never hidden, so the content stays readable.
revealBlocks.forEach(function (block) {
  block.classList.add("reveal");
  revealObserver.observe(block);
});
