import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './texto-hce.js'
import './paciente-hce.js'
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
/**
 * @customElement
 * @polymer
 */
class Hce extends PolymerElement {
  static get template() {
    return html`
    <style>
		.collapse-content {
			padding: 15px;
			border: 1px solid #dedede;
      	}

		.div{
        	text-align: center;
        	display: block;
		}
		paper-tabs {
			background-color: #496EB4;
			color: white;
			font-size: 1.8vw;
		}
	</style>
	<h1>Hola Mundo </h1>
	<paciente-hce></paciente-hce>
    <div id="paciente-content">
    </div>
  <div class = "div" id="hce-content">
    <paper-tabs selected="{{selected}}">
      <paper-tab>Consulta</paper-tab>
	  <paper-tab>Antecedentes</paper-tab>
	  <paper-tab>Examen</paper-tab>
	  <paper-tab>Paraclinicos</paper-tab>
	  <paper-tab>Diagnostico</paper-tab>
	  <paper-tab>Analisis</paper-tab>
	  <paper-tab>Control</paper-tab>
	  <paper-tab>Notas</paper-tab>
    </paper-tabs>
    <iron-pages selected="{{selected}}">
	  <div>
			<texto-hce prop1="Motivo de la consulta" id = "consulta"></texto-hce>
      </div>
	  <div>
			<texto-hce prop1="Antecedentes Patologicos" id="antecedentes"></texto-hce>
	  </div>
	  <div>
			<texto-hce prop1="Examen Fisico" id="examen"></texto-hce>
	  </div>
	  <div>
			<texto-hce prop1="Paraclinicos" id="paraclinicos"></texto-hce>
	  </div>
	  <div>
			<texto-hce prop1="Diagnostico" id="diagnostico"></texto-hce>
	  </div>
	  <div>
			<texto-hce prop1="Analisis - Plan" id="plan"></texto-hce>
	  </div>
	  <div>
			<texto-hce prop1="Control" id="control"></texto-hce>
	  </div>
	  <div>
			<texto-hce prop1="Notas" id="notas"></texto-hce>
	  </div>
    </iron-pages>
    </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Hce'
	  },
	  
	  selected: {
		type: Number,
		value: 0
	  }
    };
  }
  saluda(){
	var texto = this.$.consulta.greetMe();
	console.log(texto);
	this.$.consulta.setMe("Su puta madre");
  }
}

window.customElements.define('hce-mdc', Hce);





