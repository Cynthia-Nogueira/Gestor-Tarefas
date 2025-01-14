



//(clickMenu) funcao que ira abrir e fechar o menu no site


/*function clickMenu() {
    const itensMenu = document.getElementById('itensMenu');

    if (itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none'
    } else
    {
        itensMenu.style.display = 'block'
    }
}*/

function clickMenu() {
    const itensMenu = document.getElementById('itensMenu');
    if (itensMenu) {
        if (itensMenu.style.display === 'block') {
            itensMenu.style.display = 'none';
        } else {
            itensMenu.style.display = 'block';
        }
    }
}
