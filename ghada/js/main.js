const scrolToTop = document.querySelector('.to-top'),
      btnContact = document.querySelector('.btn-contact');




btnContact.addEventListener('click', () => {
    window.scroll({
        top: contact.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 134) {

        scrolToTop.classList.contains('visible') ? '' : scrolToTop.classList.add('visible');

    } else {

        scrolToTop.classList.contains('visible') ? scrolToTop.classList.remove('visible') : '';

    }
})

scrolToTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

const quizes = document.querySelector('#quizes'),
        initiatives = document.querySelector('#initiatives'),
        about = document.querySelector('#about'),
        articles = document.querySelector('#articles'),
        customers = document.querySelector('#customers'),
        youtube = document.querySelector('#youtube'),
        contact = document.querySelector('#contact'),
        toQuizes = document.querySelectorAll('.to-quizes'),
        toInitiatives = document.querySelectorAll('.to-initiatives'),
        toAbout = document.querySelectorAll('.to-about'),
        toArticles = document.querySelectorAll('.to-articles'),
        toCustomers = document.querySelectorAll('.to-customers'),
        toYoutube = document.querySelectorAll('.to-youtube'),
        toContact = document.querySelectorAll('.to-contact'),
        body = document.querySelector('body');


toQuizes.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: quizes.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
})

toYoutube.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: youtube.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
})

toInitiatives.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: initiatives.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
})

toAbout.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: about.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
});

toArticles.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: articles.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
});

toCustomers.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: customers.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
});


toContact.forEach(element => {
    element.addEventListener('click', () => {
        window.scroll({
            top: contact.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
});




const navbarLi = document.querySelectorAll('.container header ul.nav-ful li'),
        startMenu = document.querySelector('.wrapper button.menu'),
        closeMobileMenuBtn = document.querySelector('.wrapper button.close-mobile'),
        mobileMenu = document.querySelector('.wrapper ul.nav-mobile'),
        blurDiv = document.querySelector('.blur'),
        allLi = document.querySelectorAll('ul.nav-mobile li');

navbarLi.forEach(element => {
    element.addEventListener('click', () => {

        console.log('Clicked');
        navbarLi.forEach(element => {
            element.classList.remove('active');
        });

        element.classList.add('active');
    })
});

startMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('active');
    blurDiv.classList.add('show');
    closeMobileMenuBtn.classList.remove('hide');
    startMenu.classList.add('hide');
    body.style.height = '100vh';
    body.style.overflow = 'hidden';
});

closeMobileMenuBtn.addEventListener('click', hideMobile);
blurDiv.addEventListener('click', hideMobile);
allLi.forEach(li => {
    li.addEventListener('click', hideMobile);
})

function hideMobile() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('active');
    closeMobileMenuBtn.classList.add('hide');
    startMenu.classList.remove('hide');
    blurDiv.classList.remove('show');
    body.style.height = '';
    body.style.overflow = 'visible';
    body.style.overflowX = 'hidden';
}

var initiaCarousel = document.querySelector('.initiatives-carousel'),
    customersSlider = document.querySelector('.wrapper .customers .customers-slider'),
    partenersSlider = document.querySelector('.parteners-slider');


var flkty = new Flickity(initiaCarousel,{
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 2000
});


var flktyCustomers = new Flickity(customersSlider,{
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 1500
});

var flktyCustomers = new Flickity(partenersSlider,{
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 1500
});


var figures = document.querySelectorAll('figure'),
    modalcontainer = document.querySelector('#modal-container'),
    modalBackground = document.querySelector('.modal-background'),
    closeModal = document.querySelector('#modal-container .close'),
    quiezImages = document.querySelectorAll('#modal-container .modal-other-quizes img'),
    quiezMainImage = document.querySelector('#modal-container .modal-main-img'),
    otherImagesContainer = document.querySelector('#modal-container .modal-other-quizes');


quiezImages.forEach(image => {
    image.addEventListener('click', () => {
        quiezImages.forEach(image => {
            image.classList.remove('current');
        });

        image.classList.add('current');

        var filename = image.src.replace(/^.*[\\\/]/, '');

        var newSrc = image.src.split('/');

        newSrc.pop();
        newSrc.push(filename.split('-')[0] + '.jpg');
        newSrc = newSrc.join('/')

        console.log(newSrc)

        quiezMainImage.src = newSrc;

        if (image.offsetLeft > (otherImagesContainer.clientWidth / 2)) {
            otherImagesContainer.clientWidth < 400 ? scrollTo(otherImagesContainer, (image.offsetLeft - 60), 400) : scrollTo(otherImagesContainer, (image.offsetLeft - (otherImagesContainer.clientWidth/2)), 400);

        } else {
            scrollTo(otherImagesContainer, 0, 400);
        }

    })
})

figures.forEach((figure) => {
    figure.addEventListener('click', (e) => {

        this.currentModalImg = e.currentTarget.dataset.name;

        modalcontainer.classList = [];

        modalcontainer.classList.add('active');

        body.classList.add('modal-active');

        document.querySelector('body').style.height = '100vh';
        document.querySelector('body').style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', function() {

    console.log("Clicked");
    modalcontainer.classList.add('out');
    body.classList.remove('modal-active');

    document.querySelector('body').style.height = '';
    document.querySelector('body').style.overflow = 'visible';
    document.querySelector('body').style.overflowX = 'hidden';

});

function scrollTo(element, to, duration) {
    var start = element.scrollLeft,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
