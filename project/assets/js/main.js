// Main.js - Shared JavaScript functionality

// Page transition handler
function handlePageTransition(event) {
    // Only handle internal links
    const href = event.currentTarget.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
        return;
    }
    
    // Check if it's a different page
    const currentPath = window.location.pathname;
    const targetPath = new URL(href, window.location.href).pathname;
    
    if (currentPath !== targetPath) {
        event.preventDefault();
        
        // Add transition class to body
        document.body.classList.add('page-transitioning');
        
        // Add fade out effect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease-out';
        
        // Navigate after short delay
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    }
}

// Navigation active link highlighting
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        if (linkHref) {
            const linkPath = new URL(linkHref, window.location.href).pathname;
            const currentPage = currentPath.split('/').pop() || 'index.html';
            const linkPage = linkPath.split('/').pop();
            
            // Check if current page matches link
            if (currentPath === linkPath || 
                currentPage === linkPage ||
                (currentPage === 'index.html' && linkPage === 'index.html') ||
                (currentPath.includes('donation') && linkHref.includes('donation')) ||
                (currentPath.includes('community') && linkHref.includes('community')) ||
                (currentPath.includes('dashboard') && linkHref.includes('dashboard')) ||
                (currentPath.includes('farm') && linkHref.includes('farm')) ||
                (currentPath.includes('zero') && linkHref.includes('zero')) ||
                (currentPath.includes('learn') && linkHref.includes('learn'))) {
                link.classList.add('active');
            }
        }
    });
}

// Add page transition listeners to nav links
function setupPageTransitions() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', handlePageTransition);
    });
}

// Home page loading animation
function initHomePageAnimation() {
    if (document.body.classList.contains('home-page')) {
        const heroSection = document.querySelector('.hero-section');
        const featuresSection = document.querySelector('.features-section');
        
        if (heroSection) {
            heroSection.style.opacity = '0';
            heroSection.style.transform = 'translateY(50px)';
            heroSection.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            
            setTimeout(() => {
                heroSection.style.opacity = '1';
                heroSection.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (featuresSection) {
            featuresSection.style.opacity = '0';
            featuresSection.style.transform = 'translateY(30px)';
            featuresSection.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
            
            setTimeout(() => {
                featuresSection.style.opacity = '1';
                featuresSection.style.transform = 'translateY(0)';
            }, 400);
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link
    setActiveNavLink();
    
    // Setup page transitions
    setupPageTransitions();
    
    // Initialize home page animation
    initHomePageAnimation();
    
    // Add page content animation class
    const mainContent = document.querySelector('.container, .hero-section, .features-section');
    if (mainContent && !document.body.classList.contains('home-page')) {
        mainContent.classList.add('page-content');
    }
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

// Utility function for animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Export functions for use in other scripts
window.NourishNet = {
    toggleMobileMenu,
    animateOnScroll,
    setActiveNavLink
};
