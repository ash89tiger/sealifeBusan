let _width = $('body').width()
console.log($('body').width())
$('.item').click(function(){
    $('.item').css('display','flex')
    $('.more').css('display','none')
    $(this).next('.more').css('display','flex')
    // if ( _width < 1000 ){
    //     console.log('true')
    //     console.log(this)
    //     $(this).next('.more').find('p4').css('display', 'none')
    //     console.log($(this).next('.more').find('p4').text())
    // }
    $(this).css('display','none')
})