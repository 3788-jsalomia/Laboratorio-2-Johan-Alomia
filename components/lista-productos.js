//import { productos } from '../app.js';

class ListaProductos extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    let tabla = `
      <style>
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; }
        button { margin: 0 5px; }
      </style>
      <table>
        <tr>
          <th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Descripción</th><th>Acciones</th>
        </tr>
        ${productos.map(p => `
          <tr>
            <td>${p.nombre}</td>
            <td>${p.precio}</td>
            <td>${p.cantidad}</td>
            <td>${p.descripcion}</td>
            <td>
              <button onclick="editar(${p.id})">Editar</button>
              <button onclick="eliminar(${p.id})">Eliminar</button>
            </td>
          </tr>
        `).join('')}
      </table>
    `;

    this.shadow.innerHTML = tabla;

    this.shadow.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = parseInt(e.target.getAttribute('onclick').match(/\d+/)[0]);
        if (e.target.textContent === 'Editar') {
          window.dispatchEvent(new CustomEvent('navegar', { detail: 'editar-' + id }));
        } else {
          const index = productos.findIndex(p => p.id === id);
          if (index !== -1) productos.splice(index, 1);
          this.render();
        }
      });
    });
  };
}

customElements.define('lista-productos', ListaProductos);
