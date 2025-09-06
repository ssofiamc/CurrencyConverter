const itemMenu = (text, onItemClick) => {
    const li = document.createElement('li');
    const button = document.createElement('button');

    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.textContent = 'home'
    button.appendChild(span);

    button.innerHTML += text;
    button.addEventListener('click', () => onItemClick(text));
    //button.innerHTML = button.innerHTML + text;
    li.appendChild(button);
    return li;
};

const menu = (navegateTo) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'menuPrincipal');
    nav.classList.add('menu');

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');

    const iconClose = document.createElement('span');
    iconClose.classList.add('material-symbols-outlined');
    iconClose.textContent = 'close';
    closeBtn.appendChild(iconClose);
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
    });

    const list = document.createElement('ul');
    const options = [
        'Responsive',
        'Ionic',
        'Reactnative',
        'Android',
        'Consultar logs'
    ];
    for (let item of options) {
        list.appendChild(itemMenu(item, (text) => {
            navegateTo(text);
            nav.classList.remove('open');
        }));
    }
    // list.appendChild(itemMenu('Responsive'));
    // list.appendChild(itemMenu('Ionic'));
    // list.appendChild(itemMenu('Reactnative'));
    // list.appendChild(itemMenu('Android'));

    const div = document.createElement('div');
    div.appendChild(closeBtn);
    div.appendChild(list);

    nav.appendChild(div);
    return nav;
};

export default menu;