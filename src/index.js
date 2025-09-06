import './sass/app.scss';

//import button from './components/buttons.js';
import menu from './components/menu.js';
import header from './components/header.js';
import footer from './components/footer.js';

import inicioPage from './pages/inicioPage.js';
import ionicPage from './pages/ionicPage.js';
import reactnativePage from './pages/reactnativePage.js';
import androidPage from './pages/androidPage.js';
import logPage from './pages/logPage.js';

const routesPages = (namePage) => {
    const content = document.getElementById('content-page');
    content.innerHTML = '';
    switch (namePage) {
        case 'Ionic':
            content.appendChild(ionicPage());
            break;
        case 'Reactnative':
            content.appendChild(reactnativePage());
            break;
        case 'Android':
            content.appendChild(androidPage());
            break;
        case 'Consultar logs':
            content.appendChild(logPage());
            break;
        default: //'Responsive' | 'defaul'
            content.appendChild(inicioPage());
            break;
    }
    // localStorage.setItem('click_menu', namePage);
    // const clickLocal = localStorage.getItem('click_menu');
    // console.log(clickLocal);
    sessionStorage.setItem('click_menu', namePage);
    const clickLocal = sessionStorage.getItem('click_menu');
    console.log(clickLocal);
    console.log(localStorage.length)
    console.log(localStorage.key(0))
    console.log(localStorage.key(1))
    console.log(localStorage.getItem(localStorage.key(1)))
}

const page = document.getElementById('page');
//page.classList.add('principal');
page.appendChild(header());
page.appendChild(menu((namePage) => {
    routesPages(namePage)
}));

const contentPage = document.createElement('main');
contentPage.setAttribute('id', 'content-page');
page.appendChild(contentPage);
routesPages('default');

page.appendChild(footer());