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
			.buscando {
				display: inline-block;
				width: 50%;
				background-color: #cccccc;
				border: 2px solid;
				border-color: #496EB4;
				border-radius: 8px;
				margin-bottom: 20px;
				padding: 8px 0px 5px 5px;
			}
			.boton {
				width: 60% ;
				font-size: 22px;
				transition-duration: 0.6s;
				background-color: #496EB4;
				color: white;
				padding: 12px 20px;
				margin: 8px 0;
				border-radius: 4px;
				cursor: pointer;
				border: 3px solid #dedede;
				display: inline-block;
				text-align: center;
			}
			.boton:hover {
				color: black;
				background-color: white;
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
					  style="width: 30%; font-size: 14px;">Atender
				  </button>
				  <button on-click="consultaHce" 
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
		  <iron-ajax
			  id="consultaHce"
			  url="http://127.0.0.1:5000/consultaHce"
				method="POST"
			  handle-as="json"
			  on-response="getHce"
			  on-error="notFoundHce"
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
		type: Number,
		computed:'calcularEdad(fechaNacimiento)'
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
      tipo_usuario: {
        type: String
	  },
	  opened: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }
  getHce(evento, solicitud){
		var ans = solicitud.response;
		console.log(ans);
		var prueba = document.getElementById("mdc");
		console.log(prueba);
		prueba.atendCita(ans);
  }
  getPaciente(evento, solicitud) {
	var datos = solicitud.response;
    this.nombre = datos['nombre'] +" "+ datos['apellido'] ;
    this.documento_tipo = datos['tipoDocumento'];
    this.lugarNacimiento = datos['lugarNacimiento'];
    this.tipo_usuario = datos['tipoUsuario'];
    this.sexo = datos['sexo'];
    this.documento_numero = datos['numeroDoc'];
	this.fechaNacimiento = datos['nacimiento'];
    this.telefono = datos['telefono'];
    this.ciudad= datos['ciudad'];
    this.direccion = datos['direccion']; 
    this.entidad = datos['entidadSeguridad'];
    //var prueba = document.getElementById("mdc");
    //console.log(prueba);
  }
  notFoundHce(){
	  alert("no existe una historia asociada a ese paciente")
  }
  error(){
	  alert("No existe un paciente bajo ese criterio")
  }
  buscar() {
    this.$.collapse.toggle();
  }
  consultaHce(){
	var doc = this.$.documento.value;
    var envio = {
      'numeroDoc': doc
	};
	var cuerpo = JSON.stringify(envio);
	this.consultaPaciente();
	console.log("el ajax", this.$.consultaHce);
	this.$.consultaHce.body = cuerpo;
	this.$.consultaHce.generateRequest();
  }
  consultaPaciente() {
    var doc = this.$.documento.value;
    var envio = {
      'numeroDoc': doc
	};
	this.documento_numero=doc;
    var cuerpo = JSON.stringify(envio);
    this.$.consultaPaciente.body = cuerpo;
    this.$.consultaPaciente.generateRequest();
  }
  calcularEdad(fechaNacimiento){
	var fecha = new Date();
	fechaNacimiento = fechaNacimiento.split("-")[0];
	var f = fecha.getFullYear();
	return parseInt(f)-parseInt(fechaNacimiento);
  }
  getDocumento(){
	  return this.documento_numero;
  }
}

window.customElements.define('paciente-hce', PacienteHce);