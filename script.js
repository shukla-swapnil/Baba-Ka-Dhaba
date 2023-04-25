//Enabling mobile navigation

let mobNavEl = document.querySelector(".mob-nav");
const header = document.querySelector(".header");
mobNavEl = addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// //Enabling Sticky Navigation

// const sectionHeroEl = document.querySelector(".section-hero");
// const headerEl = document.querySelector(".section-header");

// const stickyNav = function (entries) {
//   const entry = entries[0];
//   console.log(entry);

//   if (entry.isIntersecting === false) headerEl.classList.add("sticky");
//   else headerEl.classList.remove("sticky");
// };

// const options = {
//   root: null,
//   threshold: 0,
// };

// const obs = new IntersectionObserver(stickyNav, options);
// obs.observe(sectionHeroEl);
