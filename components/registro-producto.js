//import { productos } from '../app.js';

class RegistroProducto extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  render = () => {
    this.shadow.innerHTML = `
      <style>
        form { display: flex; flex-direction: column; max-width: 300px; gap: 10px; }
        input, textarea { padding: 5px; }
        button { background: green; color: white; padding: 8px; border: none; }
      </style>
      <form id="form-registro">
        <input id="nombre" placeholder="Nombre" required />
        <input id="precio" type="number" placeholder="Precio" required />
        <input id="cantidad" type="number" placeholder="Cantidad" required />
        <textarea id="descripcion" placeholder="Descripción" required></textarea>
        <button type="submit">Registrar</button>
      </form>
    `;
  };

  setupListeners = () => {
    this.shadow.getElementById('form-registro').addEventListener('submit', e => {
      e.preventDefault();
      const nombre = this.shadow.getElementById('nombre').value;
      const precio = parseFloat(this.shadow.getElementById('precio').value);
      const cantidad = parseInt(this.shadow.getElementById('cantidad').value);
      const descripcion = this.shadow.getElementById('descripcion').value;

      if (!nombre || isNaN(precio) || isNaN(cantidad) || !descripcion) {
        alert('Todos los campos son obligatorios.');
        return;
      }

      productos.push({ id: Date.now(), nombre, precio, cantidad, descripcion });
      alert('Producto registrado');
      window.dispatchEvent(new CustomEvent('navegar', { detail: 'lista' }));
    });
  };
}

customElements.define('registro-producto', RegistroProducto);
