/**
 * Kim Locklier Website - JavaScript
 * Handles mobile menu toggle, form submission, and smooth interactions
 */

// ========================================
// MOBILE MENU TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu on button click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close menu when a link is clicked
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            // Reset hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            // Reset hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ========================================
// CONTACT FORM HANDLING (Netlify Forms)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation - only prevent submission if validation fails
            if (!name || !email || !message) {
                e.preventDefault();
                showMessage('Please fill in all required fields', 'error');
                return;
            }

            // Validate email format
            if (!isValidEmail(email)) {
                e.preventDefault();
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // If validation passes, show sending state and let Netlify handle submission
            const submitButton = document.querySelector('.submit-button');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Form will now submit to Netlify naturally
            // Netlify will redirect to a success page or show their default thank you message
        });
    }
});

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display message to user
 */
function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;

    // Add styles dynamically
    messageElement.style.cssText = `
        padding: 12px 16px;
        margin-bottom: 16px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background-color: #2ecc71; color: white;' : 'background-color: #e74c3c; color: white;'}
    `;

    // Insert before form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(messageElement, contactForm);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            messageElement.remove();
        }, 300);
    }, 5000);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Fade in sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards and value items
    const elements = document.querySelectorAll('.service-card, .value-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ========================================
// SMOOTH SCROLL FOR CTA BUTTONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Already handled by onclick in HTML, but can be enhanced here if needed
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// PHONE NUMBER PROTECTION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const phoneLink = document.getElementById('phoneLink');
    if (phoneLink) {
        const p1 = phoneLink.getAttribute('data-p1');
        const p2 = phoneLink.getAttribute('data-p2');
        const p3 = phoneLink.getAttribute('data-p3');
        const p4 = phoneLink.getAttribute('data-p4');
        const p5 = phoneLink.getAttribute('data-p5');

        const phoneNumber = `${p5} ${p4}${p3} ${p2} ${p1}`;
        const phoneHref = phoneNumber.replace(/\s/g, '');

        phoneLink.textContent = phoneNumber;
        phoneLink.href = `tel:${phoneHref}`;
    }
});

// ========================================
// ADD ANIMATIONS CSS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);
