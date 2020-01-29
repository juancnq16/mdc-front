import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
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
			<paper-dropdown-menu class="custom" label="Causa externa">
				<paper-listbox slot="dropdown-content" selected="0">
					<paper-item>01 = Accidente de trabajo</paper-item>
					<paper-item>02 = Accidente de tránsito</paper-item>
					<paper-item>03 = Accidente rábico</paper-item>
					<paper-item>04 = Accidente ofídico</paper-item>
					<paper-item>05 = Otro tipo de accidente</paper-item>
					<paper-item>06 = Evento catastrófico</paper-item>
					<paper-item>07 = Lesión por agresión</paper-item>
					<paper-item>08 = Lesión auto inflingida</paper-item>
					<paper-item>09 = Sospecha de maltrato físico</paper-item>
					<paper-item>10 = Sospecha de abuso sexual</paper-item>
					<paper-item>11 = Sospecha de violencia sexual</paper-item>
					<paper-item>12 = Sospecha de maltrato emocional</paper-item>
					<paper-item>13 = Enfermedad general</paper-item>
					<paper-item>14 = Enfermedad profesional</paper-item>
					<paper-item>15 = Otra</paper-item>
				</paper-listbox>
			</paper-dropdown-menu>
			<br>
			<paper-dropdown-menu class="custom" label="Finalidad Consulta">
				<paper-listbox slot="dropdown-content" selected="0">
					<paper-item>01 = Atención del parto (puerperio)</paper-item>
					<paper-item>02 = Atención del recién nacido</paper-item>
					<paper-item>03 = Atención en planificación familiar</paper-item>
					<paper-item>04 = Derección de alteraciones de crecimiento y desarrollo del menor de diez años</paper-item>
					<paper-item>05 = Detección de alteración del desarrollo del joven</paper-item>
					<paper-item>06 = Detección de alteraciones del embarazo</paper-item>
					<paper-item>07 = Detección de alteraciones del adulto</paper-item>
					<paper-item>08 = Detección de alteraciones de agudeza visual</paper-item>
					<paper-item>09 = Sospecha de maltrato físico</paper-item>
					<paper-item>10 = Detección de enfermedad profesional</paper-item>
					<paper-item>11 = No aplica</paper-item>
				</paper-listbox>
			</paper-dropdown-menu>
			<br>
			<paper-dropdown-menu class="custom" label="Finalidad Consulta">
				<paper-listbox slot="dropdown-content" selected="0">
					<paper-item>01 = Impresión Diagnostica</paper-item>
					<paper-item>02 = Confirmado nuevo</paper-item>
					<paper-item>03 = Confirmado repetido</paper-item>
				</paper-listbox>
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
		  this.$.texto.value=enf;
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
  
  }
  
  window.customElements.define('enfermedad-hce', EnfermedadHce);