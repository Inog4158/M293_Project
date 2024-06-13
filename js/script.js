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
    parallexEffect(document.getElementById('about-section'), -2, 90)
    parallexEffect(document.getElementById('skills-section'), -1, 0)
    document.getElementById('profile').style.top =  getScrollOffsetter(1.5, -5, 'vh');
});

function getVerticalScrollPercentage(){
    const elm = document.body;
    const p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}

function getScrollOffsetter(multiplier, offset, unit) {
    return getVerticalScrollPercentage() * multiplier + offset + unit;
}

function parallexEffect(elm, multiplier, offset){
    elm.style.backgroundPositionY = getScrollOffsetter(multiplier, offset, 'vh')
}