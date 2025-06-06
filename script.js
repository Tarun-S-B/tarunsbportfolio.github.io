// ...existing code...
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar-navbar .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // adjust offset as needed
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  // Special case: if at the bottom of the page, set last section active
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    current = sections[sections.length - 1].getAttribute('id');
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
// ...existing code...







// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll(".section");
//     const navLinks = document.querySelectorAll(".nav-link");

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const activeId = entry.target.id;
//                     navLinks.forEach(link => {
//                         link.classList.toggle("active", link.getAttribute("href").substring(1) === activeId);
//                     });
//                 }
//             });
//         },
//         { threshold: 0.6 }
//     );

//     sections.forEach(section => observer.observe(section));
// });


// window.addEventListener('scroll', function () {
//   const scrolled = window.scrollY;
  
//   const parallaxElements = [...this.document.getElementsByClassName('parallax')];

//   parallaxElements.forEach((parallax) => {
//     parallax.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
//     // parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
//   })

// //   parallax.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
// });
