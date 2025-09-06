const logPage = () => {
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Logs';

    contentPage.appendChild(titulo);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'Log';
    const th2 = document.createElement('th');
    th2.textContent = 'Valor';
    tr.appendChild(th1);
    tr.appendChild(th2);
    thead.appendChild(tr);

    const tbody = document.createElement('tbody');

    for (let index = 0; index < localStorage.length; index++) {
        const keyLocal = localStorage.key(index);
        const valueLocal = localStorage.getItem(keyLocal);

        const row = document.createElement('tr');
        const log = document.createElement('td');
        const val = document.createElement('td');
        log.textContent = keyLocal;
        val.textContent = valueLocal;
        row.appendChild(log);
        row.appendChild(val);
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    contentPage.appendChild(table);

    return contentPage;
}

export default logPage;