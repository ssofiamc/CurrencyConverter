const ionicPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Aplicaciones en ionic';

    contentPage.appendChild(titulo);
    return contentPage;
}

export default ionicPage;