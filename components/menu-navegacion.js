class MenuNavegacion extends HTMLElement {
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
        nav {
          background: #333;
          padding: 10px;
        }
        a {
          color: white;
          margin: 0 15px;
          text-decoration: none;
          cursor: pointer;
        }
      </style>
      <nav>
        <a id="inicio">Inicio</a>
        <a id="registro">Gestión Productos</a>
        <a id="acerca">Acerca de</a>
      </nav>
    `;
  };

  setupListeners = () => {
    this.shadow.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', e => {
        const vista = e.target.id;
        window.dispatchEvent(new CustomEvent('navegar', {
          detail: vista
        }));
      });
    });
  };
}

customElements.define('menu-navegacion', MenuNavegacion);
