import ejemplo from '../services/endpoints.js';

const inicioPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Conversión de divisas';

    contentPage.appendChild(titulo);

    ejemplo();
    return contentPage;
}

export default inicioPage;