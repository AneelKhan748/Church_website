// navbar color change on scroll
document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } 
  else {
    navbar.classList.remove("scrolled");
  }
});



// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
// Get all sections
const sections = document.querySelectorAll('section');

// Function to check which section is in view
function checkSectionInView() {
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionTop + sectionHeight - viewportHeight / 1) {
      navLinks.forEach((link, i) => {
        if (i === index) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

// Add event listener to window scroll
window.addEventListener('scroll', checkSectionInView);

// Add event listener to window load
window.addEventListener('load', checkSectionInView);

