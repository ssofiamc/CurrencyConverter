const ionicPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Configuración';

    contentPage.appendChild(titulo);
    return contentPage;
}

export default ionicPage;