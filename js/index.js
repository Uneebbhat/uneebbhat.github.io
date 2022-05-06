const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    console.log('clicked');
});

show = () => {
    document.getElementById('change').innerHTML = '<b>web developer</b>';
}

show2 = () => {
    document.getElementById('change').innerHTML = '<b>graphic designer</b>';
}

setInterval(show, 2000);
setInterval(show2, 4000);


comp = () => {
    document.getElementById('comp').innerHTML = '<b>Service Shoes</b>';
}

comp2 = () => {
    document.getElementById('comp').innerHTML = '<b>Wellcreator</b>';
}

setInterval(comp, 2000);
setInterval(comp2, 4000);
