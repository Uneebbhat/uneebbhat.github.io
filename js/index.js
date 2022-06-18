const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log('clicked');
})

setTimeout(() => {
    document.getElementById('content').innerHTML = '<h3>This is an h3 heading</h3>'
}, 2000);

var str = 'this is a string';
console.log(str);
