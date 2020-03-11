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
		<button class="boton" style="width: 50%;
			  font-size: 14px" on-click="buscar">Buscar
		</button>
		<iron-collapse id="collapse" opened="{{opened}}">
			  <div class="buscando">
				  <label >Numero de documento del paciente : </label> <br>
				  <input type="text" id="documento" 
					  class="miniBusqueda" 
					  style="width: 50%; margin-right: 15px;">
				  </input>
				  <button on-click="consultaPaciente" 
					  class="boton" 
					  style="width: 30%; font-size: 14px;">Consultar
				  </button>
			  </div>
		  </iron-collapse>
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
		<iron-ajax
			  id="consultaPaciente"
			  url="http://127.0.0.1:5000/consultaPaciente"
				method="POST"
			  handle-as="json"
			  on-response="getPaciente"
			  on-error="error"
			  >
		  </iron-ajax>
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
	  },
	  opened: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }
  getPaciente(evento, solicitud) {
    var datos = solicitud.response;
    this.nombre = datos['nombre'] + datos['apellido'] ;
    this.documento_tipo = datos['tipoDocumento'];
    this.lugarNacimiento = datos['lugarNacimiento'];
    this.usuario_tipo = datos['tipoUsuario'];
    this.sexo = datos['sexo'];
    this.documento_numero = datos['numeroDoc'];
    this.fechaNacimiento = datos['nacimiento'];
    //this.$.rh.value = datos['RH'];
    this.telefono = datos['telefono'];
    //this.$.correo.value = datos['email'];
    //this.$.estado_civil.value = datos['estadoCivil'];
    //this.$.zona_residencia.value = datos['zona_residencia'];
    this.cuidad= datos['ciudad'];
    this.direccion = datos['dirección'];
    this.entidad = datos['entidadSeguridad'];
    this.$.plan_beneficios.value = datos['plan_beneficios'];
    this.$.tipo_sangre.value = datos['grupoSanguineo'];
    var prueba = document.getElementById("mdc");
    console.log(prueba);
  }
  error(){
	  alert("No existe un paciente bajo ese criterio")
  }
  buscar() {
    this.$.collapse.toggle();
  }
  consultaPaciente() {
    var doc = this.$.documento.value;
    var envio = {
      'numeroDoc': doc
    };
    var cuerpo = JSON.stringify(envio);
    this.consultaPaciente.body = cuerpo;
    console.log(cuerpo);
    this.consultaPaciente.generateRequest();
  }

}

window.customElements.define('paciente-hce', PacienteHce);