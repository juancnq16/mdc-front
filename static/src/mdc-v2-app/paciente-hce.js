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
      },
      fechaNacimiento: {
        type: Date,
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
  fillPaciente(datos){
    this.nombre = datos['nombre']+" "+datos['apellido'];
    this.documento_tipo = datos['tipoDocumento'];
    this.lugarNacimiento = datos['lugarNacimiento'];
    this.usuario_tipo = datos['tipoUsuario'];
    this.sexo = datos['sexo'];
    this.documento_numero = datos['numeroDoc'];
    this.fechaNacimiento = datos['nacimiento'];
    //this.$.rh.value = datos['RH'];
    //this.$.pais_nacimiento.setValue(datos['lugarNacimiento']);
    this.telefono = datos['telefono'];
    //this.$.correo.value = datos['email'];
    //this.$.estado_civil.selected = datos['estadoCivil'];
    //this.$.zona_residencia.value = datos['zona_residencia'];
    this.ciudad = datos['ciudad'];
    this.direccion= datos['direccion'];
    this.entidad = datos['entidadSeguridad'];
    //this.$.plan_beneficios.value = datos['plan_beneficios'];
    //this.$.tipo_sangre.value = datos['grupoSanquineo'];
  }
}

window.customElements.define('paciente-hce', PacienteHce);