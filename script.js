function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const burgerIcon = document.querySelector('.burger-icon');
   
    
    menuLinks.classList.toggle('active');
    burgerIcon.classList.toggle('active');

}

// Close menu when clicking on nav links (for single-page navigation)
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Navigation functionality
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.getElementById('burger-nav');
    
    // Hide/show nav on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add('hide');
    } else {
        nav.classList.remove('hide');
    }
    lastScroll = currentScroll;
});

// Close menu when clicking links
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.menu-links');
        const burger = document.querySelector('.burger-icon');
        
        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

 window.addEventListener('scroll', () => {
            const desktopNav = document.getElementById('desktop-nav');
            const burgerNav = document.getElementById('burger-nav');
            const profileSection = document.getElementById('profile');

            const profileBottom = profileSection.offsetTop + profileSection.offsetHeight;
            const scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition === 0) {
                // At the very top of the page
                desktopNav.classList.remove('hide');
                burgerNav.classList.remove('hide');
            } else if (scrollPosition < profileBottom) {
                desktopNav.classList.remove('hide');
                burgerNav.classList.remove('hide')
            }
            else {
                // Scrolled down - hide navbar
                desktopNav.classList.add('hide');
                burgerNav.classList.add('hide');
            }
        });

    document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.certificate-card');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    const seeMoreContainer = document.querySelector('.see-more-container');
    const DESKTOP_LIMIT = 5;
    const MOBILE_LIMIT = 3;
    let isExpanded = false;

    function updateVisibility() {
        const isMobile = window.innerWidth <= 768; // Standard mobile breakpoint
        
        if (isMobile) {
            // Mobile behavior
            certificates.forEach((cert, index) => {
                cert.style.display = (isExpanded || index < MOBILE_LIMIT) ? 'block' : 'none';
            });
            seeMoreContainer.style.display = certificates.length > MOBILE_LIMIT ? 'block' : 'none';
            seeMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
        } else {
            // Desktop behavior
            certificates.forEach((cert, index) => {
                cert.style.display = (isExpanded || index < DESKTOP_LIMIT) ? 'block' : 'none';
            });
            seeMoreContainer.style.display = certificates.length >  DESKTOP_LIMIT ? 'block' : 'none';
            seeMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
           
        }
    }

    // Toggle visibility on button click
    seeMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        updateVisibility();
    });

    // Initialize and update on resize
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
});