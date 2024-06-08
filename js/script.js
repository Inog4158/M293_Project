document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const home = document.getElementById('home-item');
    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            if (item !== home.parentElement){
                home.style.color = 'var(--color-text)';
            }
        });
        item.addEventListener('mouseout', function() {
            home.style.color = 'var(--color-highlight)';
        });
    });
});

window.addEventListener('scroll', function() {
    var bild = document.getElementById('profile');
    var scrollArea = 1000 -  window.innerHeight;
    var scrollTop = window.scrollY || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    bild.style.top = scrollPercent  * 20 - 5 +'vh';
});