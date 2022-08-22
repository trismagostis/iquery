$(document).ready(function() {
    let number=0;
let spanInDiv = $('div').find('.salary');
spanInDiv.each(function(){
    number+= Number($(this).text());
    })
    $('#count-sum').click(function(){
        $('#sum').text(number);
    })
})
