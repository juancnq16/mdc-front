import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
/**
 * @customElement
 * @polymer
 */

class PacienteHce extends PolymerElement {
  static get template() {
    return html`
		<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700i" rel="stylesheet">
		<style>
			table{
				font-size: 14px;
			}
			tr, td{
				
				text-align: right;
			}
			paper-card {
				width: 100%;
				font-size: 20px;
				width: 100%;
				text-align: center;
			}
			p {
				display: inline-block;
			}
			.contenido {
				width: 100%;
				display: inline-block;
				text-align: center ;
				background-color: #f2f2f2;
				padding: 10px 30px;
			}
		</style>
		<h2 style = "text-align: center;">Datos del paciente</h2>
		<paper-card>
			<div class="contenido">
				<table>
					<tr>
						<td>
							<p>
								Nombre: <input type="text" disabled placeholder="[[nombre]]">
							</p>
						</td>
						<td>
							<p>
								Telefono: <input type="text" disabled placeholder="[[telefono]]">
							</p>
						</td>
						<td>
							<p>
								Fecha de nacimiento: <input type="text" disabled placeholder="[[fechaNacimiento]]">
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								Tipo de documento: <input type="text" disabled placeholder="[[documento_tipo]]">
							</p>
						</td>
						<td>
							<p>
								Numero de documento: <input type="text" disabled placeholder="[[documento_numero]]">
							</p>
						</td>
						<td>
							<p>
								Sexo: <input type="text" disabled placeholder="[[sexo]]">
							</p>	
						</td>
					</tr>
					<tr>
						<td>
							<p>
								Edad: <input type="text" disabled placeholder="[[edad]]">
							</p>
						</td>
						<td>
							<p>
								Lugar de nacimiento: <input type="text" disabled placeholder="[[lugarNacimiento]]">
							</p>
						</td>
						<td>
							<p>
								Ciudad: <input type="text" disabled placeholder="[[ciudad]]">
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								Dirección: <input type="text" disabled placeholder="[[direccion]]">
							</p>
						</td>
						<td>
							<p>
								Entidad:  <input type="text" disabled placeholder="[[entidad]]">
							</p>
						</td>
						<td>
							<p>
								Tipo usuario: <input type="text" disabled placeholder="[[tipo_usuario]]">
							</p>
						</td>
					</tr>
				</table>
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
      nombre: {
        type: String,
        value: 'Juan'
      },
      fechaNacimiento: {
        type: Date,
        value: '16-12-1999'
      },
      lugarNacimiento: {
        type: String
      },
      telefono: {
        type: String
      },
      documento_tipo: {
        type: String
      },
      documento_numero: {
        type: String
      },
      sexo: {
        type: String
      },
      edad: {
        type: String
      },
      ciudad: {
        type: String
      },
      direccion: {
        type: String
      },
      entidad: {
        type: String
      },
      usuario_tipo: {
        type: String
      }
    };
  }

}

window.customElements.define('paciente-hce', PacienteHce);