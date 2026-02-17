const shareIconElement = document.querySelector('.js-share-icon-div');
const shareSocialsElement = document.querySelector('.js-share-socials-div');

const shareIconElmentOne = document.querySelector('.js-share-icon-div-one');
const shareSocialsElementOne = document.querySelector('.js-share-socials-div-one')

const personDiv = document.querySelector('.js-person-div');

function isMobile() {
    if (window.innerWidth <= 675) {
        return true;
    }
    return false;
}

window.addEventListener('resize', () => {
    if (isMobile) {
        shareSocialsElement.classList.add('is-hidden');
    }
    if (window.innerWidth > 675) {
        personDiv.classList.remove('is-hidden');
        shareSocialsElementOne.classList.add('is-hidden');
    }
})


shareIconElement.addEventListener('click', () => {
    if (window.innerWidth <= 675) {
        personDiv.classList.toggle('is-hidden');
        shareSocialsElementOne.classList.toggle('is-hidden');
    }
    else {
        shareSocialsElement.classList.toggle('is-hidden');
        shareIconElement.classList.toggle('toggled-share-icon-div');
    }
})

shareIconElmentOne.addEventListener('click', () => {
    shareSocialsElementOne.classList.toggle('is-hidden');
    personDiv.classList.toggle('is-hidden');
})
