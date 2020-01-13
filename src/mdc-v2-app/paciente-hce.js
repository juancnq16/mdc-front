import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
/**
 * @customElement
 * @polymer
 */
class PacienteHce extends PolymerElement {
  static get template() {
	return html`
		<style>
			paper-card {
				background-color: black;
				font-size: 1.3vw;
				width: 100%;
				text-align: center;
				padding: 20px;
			}
			p {
				display: inline-block;
			}
			.contenido {
				width: 60%;
				display: inline-block;
				text-align: center ;
				background-color: #e6e6e6;
				padding: 10px 30px;
			}
		</style>
		<paper-card>
			<div class="contenido">
				<p>
					Nombre: <input type="text" disabled placeholder="[[nombre]]">
				</p>
				<p>
					Telefono: <input type="text" disabled placeholder="[[telefono]]">
				</p>
				<p>
					Fecha de nacimiento: <input type="text" disabled placeholder="[[fechaNacimiento]]">
				</p>
			</div>
		</paper-card>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Paciente'
      },
      nombre:{
		type: String,
		value: 'Juan'
	  },
	  fechaNacimiento:{
		type: Date,
		value: '16-12-1999'
	  },
	  lugarNacimiento:{
		  type:String
	  },
	  telefono:{
		  type:String
	  },
	  documento_tipo:{
		type:String
		},
		documento_numero:{
			type:String
		},
		sexo:{
			type:String
		},
		edad:{
			type:String
		},
		ciudad:{
			type:String
		},
		direccion:{
			type:String
		},
		entidad:{
			type:String
		},
		usuario_tipo:{
			type:String
		}
    };
  }
}

window.customElements.define('paciente-hce', PacienteHce);