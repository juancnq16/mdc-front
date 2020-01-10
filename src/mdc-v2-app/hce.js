import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class Hce extends PolymerElement {
  static get template() {
    return html`
        <p> Hola Mundo [[prop1]]</p>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Hce'
      }
    };
  }
}

window.customElements.define('hce-mdc', Hce);





