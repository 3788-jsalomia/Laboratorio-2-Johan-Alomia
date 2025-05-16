class FooterApp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    this.shadow.innerHTML = `
      <style>
        footer {
          background: #222;
          color: white;
          text-align: center;
          padding: 10px;
          margin-top: 20px;
        }
        a {
          color: lightblue;
          margin: 0 10px;
        }
      </style>
      <footer>
        © 2025 Todos los derechos reservados. |
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
      </footer>
    `;
  };
}

customElements.define('footer-app', FooterApp);
