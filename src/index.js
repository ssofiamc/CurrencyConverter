import './sass/app.scss';

//import button from './components/buttons.js';
import menu from './components/menu.js';
import header from './components/header.js';

import inicioPage from './pages/inicioPage.js';
import ionicPage from './pages/ionicPage.js';
import reactnativePage from './pages/reactnativePage.js';

const routesPages = (namePage) => {
    const content = document.getElementById('content-page');
    content.innerHTML = '';
    switch (namePage) {
        case 'Configuración':
            content.appendChild(ionicPage());
            break;
        case 'Guardar':
            content.appendChild(reactnativePage());
            break;    
        default: 
            content.appendChild(inicioPage());
           break;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page');
    page.classList.add('principal');
    page.appendChild(header());
    page.appendChild(menu((namePage) => {
        routesPages(namePage)
    }));

    page.appendChild(inicioPage());

    const contentPage = document.createElement('main');
    contentPage.setAttribute('id', 'content-page');
    page.appendChild(contentPage);
    routesPages('default');

    page.appendChild(footer());
});