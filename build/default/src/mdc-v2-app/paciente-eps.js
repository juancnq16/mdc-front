import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-ajax/iron-ajax.js";
import "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @customElement
 * @polymer
 */

class PacienteEps extends PolymerElement {
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
			  url="http://127.0.0.1:5000/consultaEps"
			  method="POST"
			  handle-as="text"
			  >
		  </iron-ajax>
		  <select id="selector" on-click="consulta">
			  <template is="dom-repeat" items=[[coleccion]] as="eps">
				  <option value="[[eps]]">[[eps]]</option>
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
    var resultados = request.response.split(',');
    this.coleccion = resultados;
    /*
    if (resultados.length > 1) {
    resultados.forEach(function (elemento, indice, array) {
    cadena = cadena + elemento + '\n';
    });
    } else {
    alert("no se encontraron ciudades");
    } 
    */
  }

  responde() {
    return "copy";
  }

  getSelected() {
    return this.$.selector.value;
  }

  setSelected(cadena) {
    this.$.selector.value = cadena;
  }

  setValue(cadena) {
    console.log("cadenita...", cadena, this.prop2);
    this.$.selector.selected = cadena;
    this.$.selector.value = cadena;
    this.prop2 = cadena;
  }

}

window.customElements.define('paciente-eps', PacienteEps);