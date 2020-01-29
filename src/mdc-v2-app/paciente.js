import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
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
			}
			.boton:hover {
				color: black;
				background-color: white;
			}
		</style>
		<h2>Paciente</h2>
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
			<select id="documento_tipo">
				<option value="M">Masculino</option>
				<option value="F">Femenino</option>
			</select>
			<label>Numero de documento</label>
			<input type="text" id="Ndocumento">
			<label>Fecha de nacimiento</label>
			<input type="text" id="fechaNacimiento">
			<label>Tipo de sangre</label><br>
			<input type="text" id="tipo_sangre" style="width: 10%;">
			<input type="text" id="rh" style="width: 10%;" placeholder="RH"><br>
			<label>lugar de nacimiento</label>
			<select id="lugarNacimiento">
				<option value="">acá falta la plantilla</option>
			</select>
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
			<select id="ciudad_residencia">
				<option value="soltero/a">acá va otro como el de arriba</option>
			</select>
			<label>Dirección</label>
			<input type="text" id ="direccion"></input>
			<label>Seguridad social</label>
			<select id="seuridad_social">
				<option value="soltero/a">acá va otro como el de arriba</option>
			</select>
			<input type="checkbox" name="addSeguridad" value="seguridad"> ¿Agregar? <br>
			<label>Nombre</label>
			<input type="text" id ="nombre2"></input>
			<label>Codigo</label>
			<input type="text" id ="codigo2"></input>
			<label>Tipo de usuario</label>
			<select id="seuridad_social">
				<option value="1">1. Contributivo</option>
			</select>
			<label>Plan de beneficios</label>
			<select id="plan_beneficios">
				<option value="ninguno">Ninguno</option>
			</select>
		</div>
		<button on-click="envia" class="boton">[[prop1]]</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Registrar'
      }
    };
  }
}

window.customElements.define('paciente-mdc', Paciente);