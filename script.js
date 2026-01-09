const elements = document.querySelectorAll(".card, .project");

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
});

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease";
    }
  });
});
