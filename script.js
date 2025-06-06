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
    const VISIBLE_CERTIFICATES = 5; // Number initially shown
    
    // Hide extra certificates on load
    if (certificates.length > VISIBLE_CERTIFICATES) {
        for (let i = VISIBLE_CERTIFICATES; i < certificates.length; i++) {
            certificates[i].style.display = 'none';
        }
    } else {
        document.querySelector('.see-more-container').style.display = 'none';
    }
    
    // Toggle visibility
    seeMoreBtn.addEventListener('click', function() {
        const hiddenCerts = document.querySelectorAll('.certificate-card[style="display: none;"]');
        const arrowIcon = this.querySelector('.arrow-icon');
        
        if (hiddenCerts.length > 0) {
            // Show all certificates
            hiddenCerts.forEach(cert => cert.style.display = 'block');
            this.textContent = 'Show Less';
            arrowIcon.style.transform = 'rotate(180deg)';
        } else {
            // Hide extra certificates
            for (let i = VISIBLE_CERTIFICATES; i < certificates.length; i++) {
                certificates[i].style.display = 'none';
            }
            this.textContent = 'Show More';
            arrowIcon.style.transform = 'rotate(0deg)';
        }
    });
});