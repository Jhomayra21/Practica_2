$(document).ready(function(){

    const $navbar = $('.navbar');
    const $menu = $('.navbar .menu');
    const $menuBtn = $('.menu-btn i');
    const $scrollBtn = $('.scroll-up-btn');

    function initSkillRings() {
        $('.tool-card').each(function() {
            const $this = $(this);
            const skill = $this.data('skill');
            const circle = $this.find('.skill-ring-progress');
            const circumference = 2 * Math.PI * 45; 
            
            // Establecer el dasharray inicial
            circle.css('stroke-dasharray', circumference);
            
            // Calcular y establecer el dashoffset basado en el porcentaje
            const offset = circumference - (skill / 100 * circumference);
            circle.css('stroke-dashoffset', offset);
        });
    }

    // Observar cuando las tarjetas son visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initSkillRings();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observar la sección de herramientas
    $('.tools-wrapper').each(function() {
        observer.observe(this);
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $menu.toggleClass("active");
        $menuBtn.toggleClass("active");
    });
    
    // Cierra el menú al hacer clic en un enlace (en modo móvil)
    $('.menu li a').click(function(){
        $menu.removeClass("active");
        $menuBtn.removeClass("active");
    });

    // Typing animation script
    const typed = new Typed(".typing", {
        strings: ["Desarrollador", "Diseñador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Función para manejar eventos de scroll
    function handleScroll() {
        const scrollY = $(this).scrollY;
        
        // Sticky navbar
        if(scrollY > 20) {
            $navbar.addClass("sticky");
        } else {
            $navbar.removeClass("sticky");
        }

        // Scroll to top button
        if(scrollY > 500) {
            $scrollBtn.addClass("show");
        } else {
            $scrollBtn.removeClass("show");
        }
    }

    // Event listener para scroll
    $(window).scroll(handleScroll);

    // Slide up script con animación suave
    $scrollBtn.click(function(){
        $('html').animate({scrollTop: 0}, {
            duration: 800,
            easing: 'easeInOutQuart'
        });
    });

    // Owl carousel script con autoplay
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
