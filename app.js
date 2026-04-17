/**
 * Portfolio Website - Main JavaScript
 * Modern ES6+ implementation with improved code organization
 */

// ============================================
// Project Images Mapping
// ============================================
const projectImages = {
  trivia: 'img/africa-trivia.jpg',
  brick: 'img/brix-game.jpg',
  flight: 'img/kimbo-flight.jpg',
  ecommerce: 'img/ecommerce-new.jpg',
  youtube: 'img/youtube-clone.jpg',
  tiktok: 'img/tiktok-clone.jpg',
  netflix: 'img/netflix-clone.jpg',
  PokeGame: 'img/poke-game.jpg',
  LightsOut: 'img/lights-out.jpg',
  vocabularyCenter: 'img/vocabulary-center.jpg',
  jobboard: 'img/job-board.jpg',
  Todo: 'img/todo-list.jpg',
  HangMan: 'img/hang-man.jpg',
  yatzee: 'img/yatzee-app.jpg',
  socialfashion: 'img/fashion-social3.jpg',
  'Lights-Out': 'img/lights-out.jpg'
};

// ============================================
// DOM Elements
// ============================================
const navigationToggle = document.getElementById('navigationToggle');
const navigationIcon = document.getElementById('navigationIcon');
const navigationBackground = document.getElementById('navigationBackground');
const navigationNav = document.getElementById('navigationNav');
const navigationLinks = document.querySelectorAll('.navigation__link');
const projectButtons = document.querySelectorAll('.project-btn');
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const currentYear = document.getElementById('currentYear');

// ============================================
// Navigation Toggle
// ============================================
let isNavigationOpen = false;

const toggleNavigation = () => {
  isNavigationOpen = !isNavigationOpen;
  
  // Update ARIA attributes
  navigationToggle.setAttribute('aria-expanded', isNavigationOpen);
  
  // Toggle classes
  navigationBackground.classList.toggle('active', isNavigationOpen);
  navigationNav.classList.toggle('active', isNavigationOpen);
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isNavigationOpen ? 'hidden' : '';
};

// Event listeners
navigationToggle.addEventListener('click', toggleNavigation);

// Close navigation when clicking on a link
navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isNavigationOpen) {
      toggleNavigation();
    }
    
    // Smooth scroll to section
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Close navigation when clicking outside
navigationNav.addEventListener('click', (e) => {
  if (e.target === navigationNav && isNavigationOpen) {
    toggleNavigation();
  }
});

// Close navigation on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isNavigationOpen) {
    toggleNavigation();
  }
});

// ============================================
// Project Screenshot Modal
// ============================================
const openModal = (projectId) => {
  const imagePath = projectImages[projectId];
  
  if (imagePath) {
    modalImage.src = imagePath;
    modalImage.alt = `Screenshot of ${projectId} project`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalClose.focus();
  } else {
    console.warn(`No image found for project: ${projectId}`);
  }
};

const closeModal = () => {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  modalImage.src = '';
};

// Event listeners for project buttons
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    if (projectId) {
      openModal(projectId);
    }
  });
});

// Close modal events
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  // Close modal when clicking on the backdrop
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip empty hash or just #
    if (href === '#' || href === '') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards and other sections
document.querySelectorAll('.project-card, .skill-box, .recommendation').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(3rem)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// Set Current Year in Footer
// ============================================
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// ============================================
// Form Validation Enhancement
// ============================================
const contactForm = document.querySelector('.form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e74c3c';
      } else {
        input.style.borderColor = '';
      }
    });
    
    if (!isValid) {
      e.preventDefault();
      // Show error message
      const errorMsg = document.createElement('div');
      errorMsg.className = 'form-error';
      errorMsg.textContent = 'Please fill in all required fields.';
      errorMsg.style.color = '#e74c3c';
      errorMsg.style.marginTop = '1rem';
      errorMsg.style.fontSize = '1.4rem';
      
      // Remove existing error message if any
      const existingError = contactForm.querySelector('.form-error');
      if (existingError) {
        existingError.remove();
      }
      
      contactForm.appendChild(errorMsg);
      
      // Remove error message after 5 seconds
      setTimeout(() => {
        errorMsg.remove();
      }, 5000);
    }
  });
}

// ============================================
// Performance: Lazy Loading Images
// ============================================
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support native lazy loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// Console Message
// ============================================
console.log('%c👋 Hello! Interested in my code?', 'font-size: 20px; font-weight: bold; color: #627264;');
console.log('%cCheck out my GitHub: https://github.com/tikavalery', 'font-size: 14px; color: #8f9294;');
