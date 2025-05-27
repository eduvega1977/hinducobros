const cliente = JSON.parse(localStorage.getItem('cliente'));

const detalleDiv = document.getElementById('detalle');

if (cliente) {
  detalleDiv.innerHTML = `
    <p><strong>Nombre:</strong> ${cliente.nombre}</p>
    <p><strong>DNI:</strong> ${cliente.dni}</p>
    <p><strong>Asignación:</strong> ${cliente.origen}</p>
    <p><strong>Deuda total:</strong> S/ ${cliente.deuda}</p>
    <p><strong>Oferta de cancelación:</strong> S/ ${cliente.oferta}</p>
    <p><strong>Descuento aplicado:</strong> ${cliente.descuento}</p>
  `;
} else {
  detalleDiv.innerHTML = '<p class="error">No se encontraron datos.</p>';
}

function aceptarOferta() {
  document.getElementById('resultado').innerHTML = `
    <h3>¡Oferta aceptada!</h3>
    <p>Realiza tu pago a la siguiente cuenta:</p>
    <p><strong>Banco BCP</strong><br>CC Soles: 19197763870081</p>
    <p>Envía tu comprobante al WhatsApp <a href="https://wa.me/51959973442" target="_blank">+51 959 973 442</a> o al correo <strong>gerencia@zangtel.com</strong></p>
  `;
  document.getElementById('acciones').style.display = 'none';
  document.getElementById('negociacion').style.display = 'none';
}

function mostrarNegociacion() {
  document.getElementById('negociacion').style.display = 'block';
}

function enviarPropuesta() {
  const monto = parseFloat(document.getElementById('montoPropuesto').value);
  if (isNaN(monto) || monto <= 0) {
    alert('Ingresa un monto válido');
    return;
  }

  if (monto >= cliente.oferta) {
    document.getElementById('resultado').innerHTML = `
      <h3>¡Propuesta aceptada!</h3>
      <p>Realiza tu pago a la siguiente cuenta:</p>
      <p><strong>Banco BCP</strong><br>CC Soles: 19197763870081</p>
      <p>Envía tu comprobante al WhatsApp <a href="https://wa.me/51959973442" target="_blank">+51 959 973 442</a> o al correo <strong>gerencia@zangtel.com</strong></p>
    `;
  } else {
    document.getElementById('resultado').innerHTML = `
      <h3>Propuesta enviada para revisión</h3>
      <p>Tu propuesta de S/ ${monto} será evaluada por nuestro equipo. Nos pondremos en contacto contigo.</p>
    `;
  }

  document.getElementById('acciones').style.display = 'none';
  document.getElementById('negociacion').style.display = 'none';
}