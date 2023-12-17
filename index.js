$('button').click(function(){
    $('button').css('background-color','#fff')
    $(this).css('background-color','#91AAE9')
})

$('button').eq(0).click(function(){
    $('#header').css('background-image','url(./img/해파리연구소.jpeg)')
    $('.hero p1').text('신비한 해파리 연구소')
    $('.hero p2').text('말랑말랑 해파리의 비밀을 찾아보자')
})

$('button').eq(1).click(function(){
    $('#header').css('background-image','url(./img/상어먹이.png)')
    $('.hero p1').text('스릴만점 상어 먹이주기')
    $('.hero p2').text('아슬아슬 스릴만점 상어 먹이주기 공연')
})

$('button').eq(2).click(function(){
    $('#header').css('background-image','url(./img/인어공주.png)')
    $('.hero p1').text('바다마법사와 인어공주 이야기')
    $('.hero p2').text('바다 마법사가 산호마을에 나타났다')
})

$('button').eq(3).click(function(){
    $('#header').css('background-image','url(./img/수달먹이.png)')
    $('.hero p1').text('아기수달 먹이주기')
    $('.hero p2').text('앙증맞은 수달과 아쿠아리스트의 이야기')
})
