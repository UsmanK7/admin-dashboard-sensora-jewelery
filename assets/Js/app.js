document.addEventListener("DOMContentLoaded", function () {
    // Add 'active' class to the first tab and set initial line position
    const initialTab = document.querySelector('.tab_btn');
    initialTab.classList.add('active');
    const line = document.querySelector('.line');
    line.style.width = initialTab.offsetWidth + "px";
    line.style.left = initialTab.offsetLeft + "px";
});

const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');
        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        all_content.forEach(content => { content.classList.remove('active') });
        all_content[index].classList.add('active');
    })
});

$('.menu-icon').on('click', function () {
    $('.sidebar').css('left', '0px');
    $('.overlay').css('display', 'block');
});
$('.overlay').on('click', function () {
    $('.sidebar').css('left', '-300px');
    $('.overlay').css('display', 'none');
});
