import ejemplo from '../services/endpoints.js';

const inicioPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    const formulario = document.createElement('form');

    titulo.textContent = 'Conversor de divisas';
    formulario.setAttribute('id', 'formulario');
    formulario.innerHTML = `
        <div class="cambio">
        <div class="cambio">
            <label>Ingrese monto a convertir:</label>
            <input placeholder="Monto" type="number" id="monto" name="monto" required>
        </div>
            <label for="Origen">Moneda de origen:</label>
            <select id="Origen" name="Origen">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">COP</option>
            </select>
        </div>
        <div class="cambio">
            <label for="Destino">Moneda de destino:</label>
            <select id="Destino" name="Destino">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">COP</option>
            </select>
        </div>
        <button type="submit" id="convertirBtn">Convertir</button>
    `;

    contentPage.appendChild(titulo);
    contentPage.appendChild(formulario);


    ejemplo();
    return contentPage;
}

export default inicioPage;