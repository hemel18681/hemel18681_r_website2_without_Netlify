$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function() {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 30
        }, 2000);
    });
    $('#up').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

function boxMes() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    var message = document.getElementById('message').value;
    if (name.length != 0 && email.length != 0 && service.length != 0 && message.length != 0) {
        swal({
            title: "Thank You",
            text: "Your Message has been delivered.",
            icon: "success",
        });
    }
}