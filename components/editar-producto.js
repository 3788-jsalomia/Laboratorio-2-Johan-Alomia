//import { productos } from '../app.js';

class EditarProducto extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const id = parseInt(this.getAttribute('producto-id'));
    this.producto = productos.find(p => p.id === id);
    if (this.producto) {
      this.render();
      this.setupListeners();
    }
  }

  render = () => {
    const p = this.producto;
    this.shadow.innerHTML = `
      <style>
        form { display: flex; flex-direction: column; max-width: 300px; gap: 10px; }
        input, textarea { padding: 5px; }
        button { background: blue; color: white; padding: 8px; border: none; }
      </style>
      <form id="form-editar">
        <input id="nombre" value="${p.nombre}" />
        <input id="precio" type="number" value="${p.precio}" />
        <input id="cantidad" type="number" value="${p.cantidad}" />
        <textarea id="descripcion">${p.descripcion}</textarea>
        <button type="submit">Actualizar</button>
      </form>
    `;
  };

  setupListeners = () => {
    this.shadow.getElementById('form-editar').addEventListener('submit', e => {
      e.preventDefault();
      Object.assign(this.producto, {
        nombre: this.shadow.getElementById('nombre').value,
        precio: parseFloat(this.shadow.getElementById('precio').value),
        cantidad: parseInt(this.shadow.getElementById('cantidad').value),
        descripcion: this.shadow.getElementById('descripcion').value,
      });
      alert('Producto actualizado');
      window.dispatchEvent(new CustomEvent('navegar', { detail: 'lista' }));
    });
  };
}

customElements.define('editar-producto', EditarProducto);
