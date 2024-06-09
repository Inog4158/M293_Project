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
    console.log(getVerticalScrollPercentage(document.body))
    document.getElementById('profile').style.top =  getVerticalScrollPercentage(document.body)*1.5 - 5 +'vh';
});

function getVerticalScrollPercentage( elm ){
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}