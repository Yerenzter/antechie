document.addEventListener("DOMContentLoaded", () => {
  let carousel = document.querySelectorAll(".carousel");
  let parallax = document.querySelectorAll(".parallax");
  
  let initCarousel = M.Carousel.init(carousel, {
    dist: -120
  });
  let initParallax = M.Parallax.init(parallax, {
    
  });
});