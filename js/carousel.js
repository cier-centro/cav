$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav : true,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        
        responsive: {
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});