import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"; //import '@polymer/option/option.js';

import "../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js";
import "../../node_modules/@polymer/iron-ajax/iron-ajax.js";
import "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @customElement
 * @polymer
 */

class EnfermedadHce extends PolymerElement {
  static get template() {
    return html`
		<style>
			.resultado{
				cursor:pointer;
				transition-duration: 0.2s;
			}
			.resultado:hover{
				background-color: #e6e6e6;
			}
			.contenido{
				display: inline-block;
				width: 50%;
				text-align: center;
				background-color: white;
				color: black;
				font-size: 15px;
				boder: 3px solid black;
				border-radious: 3px;
			}
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
			iron-autogrow-textarea{}
				paper-dropdown-menu{
				width: 37% ;
			}
			paper-dropdown-menu.custom{
				--paper-input-container-label:{
					font-size: 20px;
					font-weight: bold;
					color: black;
				};
				width: 37% ;
			}
			paper-card {
				background-color: #e6e6e6;
				font-size: 18px;
				width: 100%;
			}
		</style>
		<paper-card>
			<label> Causa Externa </label>
			<br>
				<select id = "causa">
					<option value ="01 = Accidente de trabajo">01 = Accidente de trabajo</option>
					<option value ="02 = Accidente de tránsito">02 = Accidente de tránsito</option>
					<option value ="03 = Accidente rábico">03 = Accidente rábico</option>
					<option value ="04 = Accidente ofídico">04 = Accidente ofídico</option>
					<option value ="05 = Otro tipo de accidente">05 = Otro tipo de accidente</option>
					<option value ="06 = Evento catastrófico">06 = Evento catastrófico</option>
					<option value ="07 = Lesión por agresión">07 = Lesión por agresión</option>
					<option value ="08 = Lesión auto inflingida">08 = Lesión auto inflingida</option>
					<option value ="09 = Sospecha de maltrato físico">09 = Sospecha de maltrato físico</option>
					<option value ="10 = Sospecha de abuso sexual">10 = Sospecha de abuso sexual</option>
					<option value ="11 = Sospecha de violencia sexual">11 = Sospecha de violencia sexual</option>
					<option value ="12 = Sospecha de maltrato emocional">12 = Sospecha de maltrato emocional</option>
					<option value ="13 = Enfermedad general">13 = Enfermedad general</option>
					<option value ="14 = Enfermedad profesional">14 = Enfermedad profesional</option>
					<option value ="15 = Otra">15 = Otra</option>
				</select>
			<br>
			<label>Finalidad Consulta</label>
			<br>
				<select id = "fin">
					<option value = "01 = Atención del parto (puerperio)">
						01 = Atención del parto (puerperio)</option>
					<option value = "02 = Atención del recién nacido">02 = Atención del recién nacido</option>
					<option value = "03 = Atención en planificación familiar">
						03 = Atención en planificación familiar</option>
					<option value = "04 = Derección de alteraciones de crecimiento y desarrollo del menor de diez años">
						04 = Derección de alteraciones de crecimiento y desarrollo del menor de diez años</option>
					<option value = "05 = Detección de alteración del desarrollo del joven">
						05 = Detección de alteración del desarrollo del joven</option>
					<option value = "06 = Detección de alteraciones del embarazo">
						06 = Detección de alteraciones del embarazo</option>
					<option value = "07 = Detección de alteraciones del adulto">
						07 = Detección de alteraciones del adulto</option>
					<option value = "08 = Detección de alteraciones de agudeza visual">
						08 = Detección de alteraciones de agudeza visual</option>
					<option value = "09 = Sospecha de maltrato físico">
						09 = Sospecha de maltrato físico</option>
					<option value = "10 = Detección de enfermedad profesional">
						10 = Detección de enfermedad profesional</option>
					<option value = "11 = No aplica">11 = No aplica</option>
				</select>
			<br>
			<label>pendiente</label>
			<br>
				<select id ="">
					<option value = "01 = Impresión Diagnostica">
						01 = Impresión Diagnostica</option>
					<option value = "02 = Confirmado nuevo">
						02 = Confirmado nuevo</option>
					<option value = "03 = Confirmado repetido">
						03 = Confirmado repetido</option>
				</select>
			</paper-dropdown-menu>
			<div class="card-content" style = "font-size: 12px;">	
				  <iron-autogrow-textarea rows="6" max-rows="4" placeholder="[[prop1]]" id="texto"></iron-autogrow-textarea>
			</div>
			<iron-ajax
				id="solicitud"
				url="/consultaEnfermedad2"
				method="POST"
				handle-as="text"
				on-response="recibe"
				on-error="errorRecibido"
				>
			</iron-ajax>
			  <div style="display: block;">
				<label for="enfermedad">Enfermedad</label>
				<input type = "text" id = "enfermedad">
				<select id="selector" name="seleccion">
					<option value="nombre">Nombre</option>
					<option value="codigo">Codigo</option>
					</select>
				  <button class="boton" on-click=envia>Ir</button>
			  </div>  
			  <div class="contenido">
				<template is="dom-repeat" items=[[coleccion]] as="enf">
					  <div class="resultado" on-click=addEnfermedad>
							<li>[[enf]]</li>
					  <div/>
				</template>
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
      enfermedades: {
        type: String,
        value: 'Enfermedades'
      },
      coleccion: {
        type: Array
      }
    };
  }

  addEnfermedad(parametro) {
    var enf = String(parametro.path[0].innerText);
    enf = this.$.texto.value + "\n" + enf;
    console.log(enf);
    this.$.texto.value = enf;
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
    this.coleccion = resultados;

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

  ready() {
    super.ready();
    console.log('my-element is ready!');
  }

  prueba() {
    var a = this.$.causa.value;
    this.$.fin.value = "03 = Atención en planificación familiar";
    return a;
  }

}

window.customElements.define('enfermedad-hce', EnfermedadHce);