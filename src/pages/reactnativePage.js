const reactnativePage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Aplicaciones en reactnative';

    contentPage.appendChild(titulo);
    return contentPage;
}

export default reactnativePage;