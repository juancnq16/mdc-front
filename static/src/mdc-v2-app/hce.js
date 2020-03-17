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
	
	<paciente-hce id = "paciente"></paciente-hce>
    
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
					<enfermedad-hce id = "diagnostico"></enfermedad-hce>
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
			<iron-ajax
			  id="enviaHce"
			  url="http://127.0.0.1:5000/enviaHce"
				method="POST"
			  handle-as="json"
			  on-response="confirmaHce"
			  on-error"fallaHce"
			  >
			  <iron-ajax
			  id="creaCita"
			  url="http://127.0.0.1:5000/creaCita"
				method="POST"
			  handle-as="json"
			  >
		  </iron-ajax>
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
	  },
	  loaded:{
		  type : Boolean,
		  value : false
	  }
    };
  }

  saluda() {
    var texto = this.$.consulta.greetMe();
    console.log(texto);
  }

  enviaHce() {//por codificar
	var envio = this.gatherData();
	var cita = this.makecita(envio);
	envio = JSON.stringify(envio);
	cita = JSON.stringify(cita);
	this.$.creaCita.body = cita;
	console.log(cita);
	this.$.enviaHce.body = envio;
	this.$.creaCita.generateRequest();
	this.$.enviaHce.generateRequest();
  }
  fillHce(datos){
	  console.log("datinhos::::", datos);
	this.$.consulta.setMe(datos['motivoConsulta']);
	this.$.antecedentes.setMe(datos['antecedentes']);
	this.$.examen.setMe(datos['examenFisico']);
	this.$.paraclinicos.setMe(datos['paraclinicos']);
	this.$.diagnostico.setMe(datos['diagnostico']);
	this.$.plan.setMe(datos['diagnostico']);
	this.$.plan.setMe(datos['plan']);
	var selections = [datos['causaExterna'], datos['tipoDiagnostico'],datos['finalidadConsulta']]
	this.$.diagnostico.setSelections(selections);
  }
  confirmaHce(){
	alert("Historia guardada con exito");
  }
  fallaHce(){
	alert("Error al guardar la historia");
  }

  getFecha() {
	var fecha = new Date();
	var mes = parseInt(fecha.getMonth())+1;
	var f = fecha.getFullYear() + "-" + mes + "-" + fecha.getDate();
	var h = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    return [f,h];
  }
  gatherData(){
	  var selections = this.$.diagnostico.getSelections();
	  var time = this.getFecha();
	  var data = {
		  "numeroDoc":this.$.paciente.getDocumento(),
		  "motivo":this.$.consulta.greetMe(),
		  "antecedentes":this.$.antecedentes.greetMe(),
			"examen" : this.$.examen.greetMe(),
			"paraclinicos":this.$.paraclinicos.greetMe(),
			"diagnostico":this.$.diagnostico.greetMe(),
			"plan":this.$.plan.greetMe(),
			"control":this.$.control.greetMe(),
			"causa":selections['causa'],
			"tipo":selections['tipo'],
			"fin":selections['fin'],
			"fecha":time[0],
			"hora":time[1]
	  };
	  return data;
  }
  makecita(paquete){
	  console.log("le paquete", paquete)
	var data = {
		"numeroDoc":paquete['numeroDoc'],
		"fecha":paquete['fecha'],
		"hora":paquete['hora'],
	};
	console.log("pasa por makecita", data);
	return data
  }
}

window.customElements.define('hce-mdc', Hce);