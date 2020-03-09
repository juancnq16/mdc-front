import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-collapse/iron-collapse.js";
import './simple-menu.js';
import './simple-menubar.js';
import './paises-mdc.js';
/**
 * @customElement
 * @polymer
 */

class Paciente extends PolymerElement {
  static get template() {
    return html`
		  <style>
			  :host{
				  text-align: center;
				  display: block;
			  }
			  .data{
				  width: 80%;
				  background-color: #f2f2f2;
				  border-radius: 10px;
				  padding: 30px;
				  display: inline-block;
				  text-align: left;
			  }
			  h2{
				  padding: 20px;	
			  }
			  label{
				  font-size: 16px;
			  }
			  input[type=text], select {
				  font-size:20px;
				  width: 100%;
				  padding: 8px 20px;
				  margin: 8px 0;
				  display: inline-block;
				  border: 1px solid white;
				  border-radius: 8px;
				  box-sizing: border-box;
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
			  .horizontal-section {
				  padding: 0;
				  margin-bottom: 20px;
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
			  simple-menu a {
				  display: block;
			  }
			  simple-menubar a, simple-menu a {
				  padding: 15px 20px;
				  color: black;
				  background-color: #cccccc;
				  cursor: pointer;
				  text-decoration: none;
			  }
			  simple-menubar a.iron-selected, simple-menu a.iron-selected {
				  color: white;
				  background-color: #496EB4; 
			  }
		  </style>
		  <h2>Paciente</h2>
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
		  <div class="data">
			  <label>Nombres</label>
			  <input type="text" id="nombres">
			  <label>Apellidos</label>
			  <input type="text" id="apellidos">
			  <label>Tipo de documento</label>
			  <select id="documento_tipo">
				  <option value="CC">CC</option>
				  <option value="TI">T.I.</option>
				  <option value="NUIP">NUIP</option>
			  </select>
			  <label>Tipo de documento</label>
			  <select id="sexo">
				  <option value="M">Masculino</option>
				  <option value="F">Femenino</option>
			  </select>
			  <label>Numero de documento</label>
			  <input type="text" id="ndocumento">
			  <label>Fecha de nacimiento</label>
			  <input type="text" id="fechaNacimiento">
			  <label>Tipo de sangre</label><br>
			  <input type="text" id="tipo_sangre" style="width: 10%;">
			  <input type="text" id="rh" style="width: 10%;" placeholder="RH"><br>
			  <label>lugar de nacimiento</label>
			  <paises-mdc id="pais_nacimiento"></paises-mdc>
			  <label>Telefonos</label>
			  <input type="text" id ="telefonos"></input>
			  <label>Correo</label>
			  <input type="text" id ="correo"></input>
			  <label>Estado civil</label>
			  <select id="estado_civil">
				  <option value="soltero/a">Soltero/a</option>
				  <option value="casado/a">Casado/a</option>
				  <option value="divorciado/a">Divorciado/a</option>
				  <option value="viudo/a">Viudo/a</option>
				  <option value="union_libre">Unión Libre</option>
			  </select>
			  <label>Zona residencia</label>
			  <select id="zona_residencia">
				  <option value="rural">Rural</option>
				  <option value="urbana">Urbana</option>
			  </select>
			  <label>Ciudad de residencia</label>
			  <paises-mdc id="residencia"></paises-mdc>
			  <label>Dirección</label>
			  <input type="text" id ="direccion"></input>
			  <label>Seguridad social</label>
			  <paciente-eps id = "eps"></paciente-eps>
			  <input type="checkbox" id="addSeguridad" value="seguridad" checked=[[eps]] on-click="cambiaEps"> ¿Agregar? <br>
			  <iron-collapse id="collapse2" opened="{{eps}}">
				  <div class="buscando">
					  <label>Nombre</label>
					  <input type="text" id ="nombre2"></input>
					  <label>Codigo</label>
					  <input type="text" id ="codigo2"></input>
					  <button on-click="addEps" 
						  class="boton" 
						  style="width: 30%; font-size: 14px;">Consultar
					  </button>
				  </div>
			  </iron-collapse>
			  <label>Tipo de usuario</label>
			  <select id="tipo_usuario">
				  <option value="1">1. Contributivo</option>
				  <option value="2">2. Subsidiado</option>
				  <option value="3">3. Vinculado</option>
				  <option value="4">4. Particular</option>
				  <option value="5">5. Otro</option>
			  </select>
			  <label>Plan de beneficios</label>
			  <select id="plan_beneficios">
				  <option value="1">Ninguno</option>
				  <option value="2">Plan de atención básica en salud. PAB.</option>
				  <option value="3">Plan obligatorio de salud del regimen contributivo. POS</option>
				  <option value="4">Plan obligatorio de salud del regimen subsidiado. POS-S</option>
				  <option value="5">Atención en accidentes de transito y eventos catastroficos. SOAT</option>
				  <option value="6">Atención inicial de urgencias</option>
				  <option value="7">Planes Complementarios En Salud (Pacs)</option>
				  <option value="8">Atención Materno-infantil</option>
			  </select>
		  </div>
		  <button on-click="envia" class="boton">[[prop1]]</button>
		  <iron-ajax
			  id="enviaPaciente"
			  url="http://127.0.0.1:5000/insertaPaciente"
				method="POST"
			  handle-as="json"
			  on-response="alter"
			  on-error="getError"
			  >
		  </iron-ajax>
		  <iron-ajax
			  id="addeps"
			  url="http://127.0.0.1:5000/addEps"
				method="POST"
			  handle-as="json"
			  >
		  </iron-ajax>
		  <iron-ajax
			  id="consultaPaciente"
			  url="http://127.0.0.1:5000/consultaPaciente"
				method="POST"
			  handle-as="json"
			  >
		  </iron-ajax>
	  `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Registrar'
      },
      buscando: {
        type: String,
        value: 'none'
      },
      eps: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_cambiaEps'
      },
      opened: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
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

  addEps() {
    var nombreEps = this.$.nombre2.value;
    var codigoEps = this.$.codigo2.value;
    var envio = {
      'Nombre': nombreEps,
      'Codigo': codigoEps
    };
    var cuerpo = JSON.stringify(envio);
    this.$.addeps.body = cuerpo;
    this.$.addeps.generateRequest();
  }

  getPaciente(evento, solicitud) {
    var datos = solicitud.response;
    this.$.nombres.value = datos['nombre'];
    this.$.apellidos.value = datos['apellido'];
    this.$.documento_tipo.selected = datos['tipoDocumento'];
    this.$.residencia.setValue(datos['lugarNacimiento']);
    this.$.tipo_usuario.selectedIndes = parseInt(datos['tipoUsuario']);
    this.$.sexo.value = datos['sexo'];
    this.$.ndocumento.value = datos['numeroDoc'];
    this.$.fechaNacimiento.value = datos['nacimiento'];
    this.$.rh.value = datos['RH'];
    this.$.pais_nacimiento.setValue(datos['lugarNacimiento']);
    this.$.telefonos.value = datos['telefono'];
    this.$.correo.value = datos['email'];
    this.$.estado_civil.value = datos['estadoCivil'];
    this.$.zona_residencia.value = datos['zona_residencia'];
    this.$.residencia.setValue(datos['ciudad']);
    this.$.direccion.value = datos['dirección'];
    this.$.eps.setValue(datos['entidadSeguridad']);
    this.$.plan_beneficios.value = datos['plan_beneficios'];
    this.$.tipo_sangre.value = datos['grupoSanguineo'];
    var prueba = document.getElementById("mdc");
    console.log(prueba);
  }

  envia() {
    console.log("gathering data");
    var tipo_usuario = this.$.tipo_usuario.value;
    var nombres = this.$.nombres.value;
    var apellidos = this.$.apellidos.value;
    var documento_tipo = this.$.documento_tipo.value;
    var sexo = this.$.sexo.value;
    var ndocumento = this.$.ndocumento.value;
    var fechaNacimiento = this.$.fechaNacimiento.value;
    var rh = this.$.rh.value;
    var lugar_nacimiento = this.$.pais_nacimiento.getSelected();
    var telefonos = this.$.telefonos.value;
    var correo = this.$.correo.value;
    var estado_civil = this.$.estado_civil.value;
    var zona_residencia = this.$.zona_residencia.value;
    var residencia = this.$.residencia.getSelected();
    var direccion = this.$.direccion.value;
    var seguridad_social = this.$.eps.getSelected();
    var plan_beneficios = this.$.plan_beneficios.value;
    var sangre = rh;
    var grupo_sanguineo = this.$.tipo_sangre.value + rh;
    var leJson = {
      "nombre": nombres,
      "apellido": apellidos,
      "tipo_documento": documento_tipo,
      "numero_documento": ndocumento,
      'nacimiento_fecha': fechaNacimiento,
      'nacimiento_lugar': lugar_nacimiento,
      'sexo': sexo,
      'ciudad': residencia,
      'direccion': direccion,
      'telefono': telefonos,
      'email': correo,
      'entidad_seguridad': seguridad_social,
      'tipo_afiliacion': "no registra",
      'tipo_usuario': tipo_usuario,
      'sangre': sangre,
      'zona': zona_residencia,
      'estado_civil': estado_civil,
      'plan_beneficios': plan_beneficios,
      'rh': sangre,
      'grupo_sanguineo': grupo_sanguineo
    };
    var cuerpo = JSON.stringify(leJson);
    this.$.enviaPaciente.body = cuerpo;
    console.log(cuerpo); //this.$.enviaPaciente.generateReques()
  }

  getError() {
    alert("ha habido un problema con el registro");
  }

  _cambiaEps(newValue, oldValue) {
    console.log(this.eps);
  }

  cambiaEps() {
    this.$.collapse2.toggle();
  }

  buscar() {
    this.$.collapse.toggle();
  }

}

window.customElements.define('paciente-mdc', Paciente);