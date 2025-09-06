const header = () => {
    const cabecera = document.createElement('header');
    cabecera.classList.add('header');

    const menuBtn = document.createElement('button');
    const iconoMenu = document.createElement('span');
    iconoMenu.classList.add('material-symbols-outlined');
    iconoMenu.textContent = 'menu';
    menuBtn.appendChild(iconoMenu);
    menuBtn.addEventListener('click', () => {
        const menuContent = document.getElementById('menuPrincipal');
        menuContent.classList.add('open');
    });


    const titulo = document.createElement('h1');
    titulo.textContent = 'Currency Converter';

    cabecera.appendChild(menuBtn);
    cabecera.appendChild(titulo);
    return cabecera;
};

export default header;