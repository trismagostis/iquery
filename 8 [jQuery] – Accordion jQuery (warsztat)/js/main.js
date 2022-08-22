$(document).ready(function(){
    // $('.accordion-item').click(function(e){
    //     console.log($(this)); //czemu sie nie tlumaczy? //this dziala
    //     if($(this).hasClass('open')) {
    //         $(this).removeClass('open');   
    //         $(this).find('.accordion-content').slideUp();
    //     } else {
    //         $(this).addClass('open');   
    //         $(this).find('.accordion-content').slideDown();
    //     }
           
    // });
    $('.accordion-item').click(function(){
        
        if($(this).hasClass('open')) {
            $(this).removeClass('open');   
            $(this).find('.accordion-content').slideUp();
        } else {
            $(this).addClass('open');   
            $(this).find('.accordion-content').slideDown();
        }
           
    });
});