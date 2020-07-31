class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Hinojosa Sanchez Shadanni Lissette. IC-51.`;
    }
}
customElements.define("mi-footer", MiFooter);