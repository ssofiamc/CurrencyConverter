const tasas = {
  USD: { EUR: 0.9, COP: 4000 },
  EUR: { USD: 1.1, COP: 4500 },
  COP: { USD: 0.00025, EUR: 0.00022 },
};

// Crear contenedor principal
const contentPage = document.createElement('section');

// Título
const titulo = document.createElement('h2');
titulo.textContent = 'Ingresa los datos para convertir tu moneda';
contentPage.appendChild(titulo);

// Formulario
const form = document.createElement('form');

// Input monto
const montoLabel = document.createElement('label');
montoLabel.textContent = 'Monto: ';
const inputNumero = document.createElement('input');
inputNumero.type = 'number';
inputNumero.placeholder = 'Ingrese un valor';
form.appendChild(montoLabel);
form.appendChild(inputNumero);
form.appendChild(document.createElement('br'));

// Select moneda origen
const origenLabel = document.createElement('label');
origenLabel.textContent = 'Origen: ';
const monedaOrigen = document.createElement('select');
['USD', 'EUR', 'COP'].forEach(moneda => {
  const option = document.createElement('option');
  option.value = moneda;
  option.textContent =
    moneda === 'USD' ? 'Dólares (USD)' :
    moneda === 'EUR' ? 'Euros (EUR)' :
    'Pesos (COP)';
  monedaOrigen.appendChild(option);
});
form.appendChild(origenLabel);
form.appendChild(monedaOrigen);
form.appendChild(document.createElement('br'));

// Select moneda destino
const destinoLabel = document.createElement('label');
destinoLabel.textContent = 'Destino: ';
const monedaDestino = document.createElement('select');
['USD', 'EUR', 'COP'].forEach(moneda => {
  const option = document.createElement('option');
  option.value = moneda;
  option.textContent =
    moneda === 'USD' ? 'Dólares (USD)' :
    moneda === 'EUR' ? 'Euros (EUR)' :
    'Pesos (COP)';
  monedaDestino.appendChild(option);
});
form.appendChild(destinoLabel);
form.appendChild(monedaDestino);
form.appendChild(document.createElement('br'));

// Botón
const boton = document.createElement('button');
boton.type = 'submit';
boton.textContent = 'Convertir';
form.appendChild(boton);

// Resultado
const resultadoDiv = document.createElement('div');
resultadoDiv.style.marginTop = '1em';
form.appendChild(resultadoDiv);

// Lógica del conversor
form.addEventListener('submit', (e) => {
  e.preventDefault();
  resultadoDiv.textContent = '';

  const monto = parseFloat(inputNumero.value);
  const origen = monedaOrigen.value;
  const destino = monedaDestino.value;

  if (isNaN(monto) || monto <= 0) {
    resultadoDiv.textContent = '⚠️ Ingrese un monto válido mayor que 0';
    resultadoDiv.style.color = 'red';
    return;
  }

  if (origen === destino) {
    resultadoDiv.textContent = '⚠️ La moneda de origen y destino no pueden ser iguales';
    resultadoDiv.style.color = 'red';
    return;
  }

  const tasa = tasas[origen]?.[destino];
  if (!tasa) {
    resultadoDiv.textContent = '⚠️ Conversión no disponible';
    resultadoDiv.style.color = 'red';
    return;
  }

  const convertido = monto * tasa;
  resultadoDiv.style.color = 'black';
  resultadoDiv.textContent = `${monto} ${origen} = ${convertido.toLocaleString()} ${destino}`;
});

// Agregar todo al body
contentPage.appendChild(form);

export default contentPage;
