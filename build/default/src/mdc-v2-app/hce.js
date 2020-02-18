import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import './texto-hce.js';
import './paciente-hce.js';
import "./enfermedad-hce.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/paper-tabs/paper-tabs.js";
import "../../node_modules/@polymer/paper-tabs/paper-tab.js";
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
			border: 3px solid #dedede;
      	}

		.division{
        	text-align: center;
			display: block;
		}
		paper-tabs {
			background-color: #496EB4;
			color: white;
			font-size: 18px;
		}
		.boton {
			transition-duration: 0.6s;
			background-color: #496EB4;
			color: white;
			padding: 14px 20px;
			margin: 8px 0;
			border-radius: 4px;
			cursor: pointer;
			border: 3px solid #dedede;
		}
		.boton:hover {
			color: black;
			background-color: white;
		}
	</style>
	
	<paciente-hce></paciente-hce>
    
		<div class = "division" id="hce-content">
		<h1>HCE</h1>
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
					<enfermedad-hce></enfermedad-hce>
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
			<button on-click="enviaHce" class="boton">Eviar</button>
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

  saluda() {
    var texto = this.$.consulta.greetMe();
    console.log(texto);
    this.$.consulta.setMe("Su puta madre");
  }

  enviaHce() {//por codificar
  }

}

window.customElements.define('hce-mdc', Hce);