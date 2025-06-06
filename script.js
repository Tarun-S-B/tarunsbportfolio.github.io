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

// Handle smooth image loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading class initially
        img.classList.add('loading');
        
        // When image loads, remove loading class and add loaded class
        img.addEventListener('load', function() {
            img.classList.remove('loading');
            img.classList.add('loaded');
        });
        
        // If image is already loaded (from cache), add loaded class immediately
        if (img.complete) {
            img.classList.remove('loading');
            img.classList.add('loaded');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to sidebar links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-navbar a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Add hover effect for cards
document.querySelectorAll('.education-card, .project-card, .certificate-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

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

// Progress bar
const progressBar = document.querySelector('.progress-bar');
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
let isDarkTheme = true; // Default dark theme

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.style.backgroundColor = isDarkTheme ? '#112044' : '#ffffff';
    document.body.style.color = isDarkTheme ? '#bdc9e5' : '#333333';
    themeToggle.innerHTML = isDarkTheme ? '🌓' : '☀️';
    
    // Update other elements' colors
    document.querySelectorAll('.education-card, .project-card, .certificate-card').forEach(card => {
        card.style.backgroundColor = isDarkTheme ? '#28375a' : '#f5f5f5';
        card.style.color = isDarkTheme ? '#bdc9e5' : '#333333';
    });
});

// Toast notifications
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const toastContainer = document.querySelector('.toast-container');
    toastContainer.appendChild(toast);
    
    // Trigger reflow
    toast.offsetHeight;
    
    // Show toast
    toast.classList.add('show');
    
    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, duration);
}

// Section visibility
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// Keyboard navigation
function handleFirstTab(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);
window.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Loading state
window.addEventListener('load', () => {
    document.querySelector('.loading-spinner').style.display = 'none';
    showToast('Welcome to my portfolio!');
});

// Add loading spinner for image loads
document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
        img.style.opacity = '0';
        document.querySelector('.loading-spinner').style.display = 'block';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
            document.querySelector('.loading-spinner').style.display = 'none';
        });
    }
});

// Error handling
window.addEventListener('error', (e) => {
    showToast('Something went wrong. Please try again later.');
    console.error('Error:', e.message);
});

// Add card interaction effects
document.querySelectorAll('.education-card, .project-card, .certificate-card').forEach(card => {
    card.addEventListener('click', () => {
        const links = card.querySelectorAll('a');
        if (links.length > 0) {
            links[0].click();
        }
    });
});
