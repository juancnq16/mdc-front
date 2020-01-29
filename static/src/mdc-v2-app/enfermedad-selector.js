import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js";
import "../../node_modules/@polymer/iron-ajax/iron-ajax.js";
import "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @customElement
 * @polymer
 */

class EnfermedadSelector extends PolymerElement {
  static get template() {
    return html`
        <style>
        input[type=text], select {
            display: inline-block;
            border-radius: 4px;
            box-sizing: border-box;
            padding: 12px 20px;
            margin: 8px 0;
            border: 3px solid #dedede;
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
        <iron-ajax
          id="solicitud"
          url="/consultaEnfermedad2"
          method="POST"
          handle-as="text"
          on-response="recibe"
          on-error="errorRecibido"
          >
      </iron-ajax>
        <form>
            <label for="enfermedad">Enfermedad</label>
            <input type = "text" id = "enfermedad" name = "enfermedadQ">
            <select id="selector" name="seleccion">
                <option value="nombre">Nombre</option>
                <option value="codigo">Codigo</option>
            </select> 
        </form>
        <button class="boton" on-click=envia>Ir</button>
        <div class="resultados" id="resultados">
            <iron-autogrow-textarea rows="4" placeholder="[[enfermedades]]" id="texto">
              [[enfermedades]]
            </iron-autogrow-textarea>
        </div>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Enfermedad'
      },
      enfermedades: {
        type: String,
        value: 'Enfermedades'
      }
    };
  }

  envia() {
    var consulta = this.$.enfermedad.value;
    var seleccion = this.$.selector.value;
    var paquete = "" + consulta + "," + seleccion;
    this.$.solicitud.body = paquete;
    this.$.solicitud.generateRequest();
  }

  recibe(e, request) {
    var resultados = request.response.split(',');
    var cadena = "";
    console.log(resultados.length);
    console.log(resultados);
    console.log(typeof resultados);

    if (resultados.length > 1) {
      resultados.forEach(function (elemento, indice, array) {
        console.log(elemento, indice);
        cadena = cadena + elemento + '\n';
      });
    } else {
      alert("no se encontraron medicamentos bajo ese criterio");
    }

    this.enfermedades = cadena;
    console.log(this.enfermedades);
  }

}

window.customElements.define('enfermedad-selector', EnfermedadSelector);