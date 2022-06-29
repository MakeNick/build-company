
$(document).ready(function() {
    $('.burger-menu').click(function (event) { 
        $('.burger-menu, .nav').toggleClass('active');         
        $('body').toggleClass('lock');
    });
});


