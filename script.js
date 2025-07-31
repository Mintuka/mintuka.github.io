$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Freelancer", "ML/AI Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // var typed = new Typed(".typing-3", {
    //     strings: ["Connect with me on :)"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Freelancer", "ML/AI Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Skills section animation trigger
    const skillsSection = document.querySelector('.skills');
    const skillItems = document.querySelectorAll('.skill-container .col');
    
    // Function to reset and trigger skills animations
    function triggerSkillsAnimation() {
        // Reset all skill items to initial state
        skillItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.animation = 'none';
        });
        
        // Trigger animations for each skill item with staggered delay
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = `fadeInUp 0.6s ease forwards`;
                item.style.animationDelay = `${(index + 1) * 0.1}s`;
            }, index * 100);
        });
    }

    // Intersection Observer for skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animations every time the section comes into view
                triggerSkillsAnimation();
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // Add click interaction for skills
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a temporary pulse effect on click
            const imgContainer = this.querySelector('.img-container');
            imgContainer.style.animation = 'pulse 0.3s ease';
            
            setTimeout(() => {
                imgContainer.style.animation = 'float 3s ease-in-out infinite';
            }, 300);
        });
    });
});