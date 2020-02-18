import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @customElement
 * @polymer
 */
class PaisesMdc extends PolymerElement {
	static get template() {
	  return html`
	  <style>
		  select {
			  font-size:20px;
			  width: 100%;
			  padding: 8px 20px;
			  margin: 8px 0;
			  display: inline-block;
			  border: 1px solid white;
			  border-radius: 8px;
			  box-sizing: border-box;
		  }
	  </style>
		  <iron-ajax
		  	auto
			  id="solicitud"
			  url="http://127.0.0.1:5000/consultaPaises"
			  method="POST"
			  handle-as="text"
			  on-response="recibe"
			  >
		  </iron-ajax>
		  <select id="selector">
		  		<option value="">[[prop2]]</option>
			  <template is="dom-repeat" items=[[coleccion]] as="pais">
				  <option value="[[pais]]">[[pais]]</option>
			  </template>
		  </select>
	  `;
	}
  
	static get properties() {
	  return {
		prop1: {
		  type: String,
		  value: 'Doctor'
		},
		prop2: {
			type: String,
			value: 'prueba'
		},
		coleccion: {
		  type: Array
		}
	  };
	}
  
	consulta() {
	  /*
	  var consulta = this.$.enfermedad.value;
	  var seleccion = this.$.selector.value;
	  var paquete = "" + consulta + "," + seleccion;
	  this.$.solicitud.body = paquete;
	  */
	  //this.$.solicitud.generateRequest();
	  console.log(this.$.seleccion.selectedIndex, ".....", this.$.seleccion.value);
	}
  
	recibe(e, request) {
		console.log("this shit is wired");
	  var resultados = request.response.split(',');
	  var cadena = "";
	  this.coleccion = resultados;
	  if (resultados.length > 1) {
		resultados.forEach(function (elemento, indice, array) {
		  cadena = cadena + elemento + '\n';
		});
	  } else {
		alert("no se encontraron ciudades");
	  } //this.enfermedades = cadena;
	}
	responde() {
	  return "copy";
	}
	getSelected(){
		return this.$.selector.value;
	}
	setValue(cadena){
		console.log("cadenita...", cadena, this.prop2);
		this.$.selector.selected=cadena;
		this.$.selector.value=cadena;
		this.prop2=cadena;
	}
	setSelected(cadena){
		this.$.selector.value=cadena;
	}
  }
  
  window.customElements.define('paises-mdc', PaisesMdc);