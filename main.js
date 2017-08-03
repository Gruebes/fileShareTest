$(document).ready(function() {
    console.log('------------------------------------');
    console.log("JS READY");
    console.log('------------------------------------');
    $('.images').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: true,
        variableWidth: true
    });
});