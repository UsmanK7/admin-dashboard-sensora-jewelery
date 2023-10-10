$('.menu-icon').on('click', function () {
    $('.sidebar').css('left', '0px');
    $('.overlay').css('display', 'block');
});
$('.overlay').on('click', function () {
    $('.sidebar').css('left', '-300px');
    $('.overlay').css('display', 'none');
});