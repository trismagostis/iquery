$(document).ready(function() {
    $('#last-first').click(function(){
    // let paragraphs =$('p');
    // console.log(paragraphs);
    // let last=paragraphs[4];
    // console.log(last);
    // let temp=paragraphs[0];
    // paragraphs[0]=last;
    // paragraphs[4]=temp;
    // console.log(paragraphs[0]); nie dziala
    //jak ze zwracaniem? wstawianie nie dziala
    // let firstParagraph = $('button').next();
    // console.log(firstParagraph);
    let lastParagraph =$('p').last();
    // console.log(lastParagraph);
    // $('button').next().remove();
    $('p').eq(0).before(lastParagraph);
    
    // $('p').eq(4).after(firstParagraph);
    // $('script').before(firstParagraph); dodaje 2


})
$('#first-last').click(function(){
    let firstParagraph =$('p').first();
    console.log(firstParagraph);
    $('p').eq(4).after(firstParagraph);
})
});