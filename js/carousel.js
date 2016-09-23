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
        },
        
    });
    
    
});
$(document).compositionend(function() {
    console.log("si esta perrito");    
    $('.owl-item').append('<div id="MyDiv" style="background-color: red; width:20ox; heigth:20px;"></div>');
});
$(document).end(function() {
    console.log("si esta perrito");    
    $('.owl-item').append('<div id="MyDiv" style="background-color: red; width:20ox; heigth:20px;"></div>');
});