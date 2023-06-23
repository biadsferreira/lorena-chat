var menuCelular = document.getElementById('menuCelular');





function clickMenuCel() {
    
    if (menuCelular.style.display == 'none') {
        menuCelular.style.display = 'flex';
    } else {
        menuCelular.style.display = 'none';
    }
}

function clickMenuTablet() {
    var menuTablet = document.getElementById('menuTablet');
    if (menuTablet.style.display == 'none') {
        menuTablet.style.display = 'flex';
    } else {
        menuTablet.style.display = 'none';
    }
}
