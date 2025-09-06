const androidPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Aplicaciones en android';

    contentPage.appendChild(titulo);
    return contentPage;
}

export default androidPage;