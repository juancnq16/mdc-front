import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class Paciente extends PolymerElement {
  static get template() {
    return html`
        <p> Hola Mundo [[prop1]]</p>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Paciente'
      }
    };
  }

}

window.customElements.define('paciente-mdc', Paciente);