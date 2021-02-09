window.addEventListener('click', clossing);
var login = document.querySelector('.login');
var map = document.querySelector('.map');
if (document.documentURI.endsWith('login=1')) {
    login.classList.remove('visuallyhidden');
}
if (document.documentURI.endsWith('map=1')) {
    map.classList.remove('visuallyhidden');
}
function clossing (eve) {
    if (eve.target.alt === 'close') {
        eve.target.parentElement.parentElement.classList.add('visuallyhidden');
    }
}

