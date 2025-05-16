
const productos = [];


const contenido = document.getElementById('contenido');

window.addEventListener('navegar', (e) => {
  const vista = e.detail;
  contenido.innerHTML = '';

  if (vista.startsWith('editar-')) {
    const id = vista.split('-')[1];
    const componente = document.createElement('editar-producto');
    componente.setAttribute('producto-id', id);
    contenido.appendChild(componente);
  } else {
    switch (vista) {
      case 'inicio':
        contenido.innerHTML = '<h2>Bienvenido a la app de gestión de productos</h2>';
        break;
      case 'registro':
        contenido.appendChild(document.createElement('registro-producto'));
        break;
      case 'lista':
        contenido.appendChild(document.createElement('lista-productos'));
        break;
      case 'acerca':
        contenido.innerHTML = `
        <h4>Integrantes:</h4>
        <p>Alomia Johan</p>
        <p>Carrillo Luis</p>
        `;
        break;
      default:
        contenido.innerHTML = '<p>Vista no encontrada</p>';
        break;
    }
  }
});


