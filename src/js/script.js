// DOM selection
const cta_section = document.querySelector(".cta-section");
const header = document.querySelector(".header");

// Determine if an element is in the visible viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

// This is for toggling the shadow-class in the header when the user scroll
window.addEventListener("scroll", () => {
  const cta_section_rect = cta_section.getBoundingClientRect();
  if (!isInViewport(cta_section) || cta_section_rect.top < 0) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});
