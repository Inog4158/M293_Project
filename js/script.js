
/*Eventlisteners*/
document.addEventListener('DOMContentLoaded', function() {
    const hamburgers = document.querySelectorAll('.hamburger');
    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            document.getElementById('sidebar').classList.toggle('open');
        })
    });

    const items = document.querySelectorAll('.head-link');
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
    
    centerContact();

    
    
    const video = document.getElementById("video-container");
    const overlay = document.getElementById("overlay");
    const overlayVideo = document.getElementById("overlay-video");
    
    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        overlayVideo.pause();
        overlayVideo.currentTime = 0;
    });
    
    video.addEventListener("click", function () {
        overlay.style.display = "flex";
        overlayVideo.play();
    })
});

window.addEventListener('scroll', function () {
    const hamburger = document.getElementById('hamburger-overlay');
    if (window.scrollY > document.getElementById('home').offsetHeight) {
        hamburger.classList.add('visible');
    } else {
        document.querySelectorAll('.hamburger').forEach( hamburger => {
            hamburger.classList.remove('open');
        });
        hamburger.classList.remove('visible');
        document.getElementById('sidebar').classList.remove('open');
    }
});

window.addEventListener('resize', function() {
    centerContact()
})

window.addEventListener('scroll', function() {
    if (!window.matchMedia("screen and (max-width: 767px)").matches) {
        parallexEffect(document.getElementById('about-section'), -2, 90)
        parallexEffect(document.getElementById('skills-section'), -1, 0)
        document.getElementById('profile').style.top =  getScrollOffsetter(1.5, -5, 'svh');  
    }
});




/*Functions*/
function centerContact() {
    const contact = document.getElementById('contact-section');
    const puffer = document.getElementById('puffer-section');
    var contactHeight = parseFloat((getStyleValue(contact, 'padding-bottom').slice(0, -2))) + parseFloat(getStyleValue(contact, 'height').slice(0, -2))
    contact.style.bottom = (getStyleValue(puffer, 'height').slice(0, -2)) - contactHeight/2 + 'px';
}

function getStyleValue(elm, property) {
    return window.getComputedStyle(elm).getPropertyValue(property);
}

function getVerticalScrollPercentage(){
    const elm = document.body;
    const p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}

function getScrollOffsetter(multiplier, offset, unit) {
    return getVerticalScrollPercentage() * multiplier + offset + unit;
}

function parallexEffect(elm, multiplier, offset){
    elm.style.backgroundPositionY = getScrollOffsetter(multiplier, offset, 'svh')
}


/*Form*/
function send() {
    let nameField = document.getElementById("input-name");
    let emailField = document.getElementById("input-email");
    let messageField = document.getElementById("input-message");
    if (nameField.value !== "" && emailField.value !== "" && messageField.value !== "") {
        window.alert("name:\n" + nameField.value+"\nemail:\n" + emailField.value+"\nmessage: \n" + messageField.value);
        document.getElementById("form").reset();
    }
}