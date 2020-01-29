import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
/**
 * @customElement
 * @polymer
 */
class TextoHce extends PolymerElement {
  static get template() {
    return html`
        <style>
          paper-card {
            background-color: #e6e6e6;
            font-size: 18px;
            width: 100%;
          }
        </style>
            <paper-card>
              <div class="card-content">	
                <iron-autogrow-textarea rows="4" placeholder="[[prop1]]" id="texto"></iron-autogrow-textarea>
              </div>
            </paper-card>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Texto-Hce'
	  }
    };
  }
  greetMe() {
		return this.$.texto.value;
  }
  setMe(valor){
	  this.$.texto.value=valor;
  }
}

window.customElements.define('texto-hce', TextoHce);