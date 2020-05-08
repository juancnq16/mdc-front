import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures, setRootPath } from "../../node_modules/@polymer/polymer/lib/utils/settings.js";
import "../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../../node_modules/@polymer/app-route/app-location.js";
import "../../node_modules/@polymer/app-route/app-route.js";
import "../../node_modules/@polymer/iron-pages/iron-pages.js";
import "../../node_modules/@polymer/iron-selector/iron-selector.js";
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);
/**
 * @customElement
 * @polymer
 */

class MdcV2App extends PolymerElement {
  static get template() {
    return html`
        <style>
        :host {
          --app-primary-color: #496EB4;
          --app-secondary-color: #000000;
          display: block;
          background-color: #000000;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
		  margin: 0 20px;
		  
			background-color: #000000;
        }
        app-drawer {
			--app-drawer-scrim-background: rgba(0, 0, 100, 0.8);
			
		}
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          font-size: 20px;
          color: white;
          backgound-color: #000000;
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: white;
          font-weight: bold;
		}
		.barra{
			background-color: #000000;
			display: block;
		}
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
		<app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
		<div class="barra">
          <app-toolbar style="color:white;">Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="hce" href="[[rootPath]]hce">hce</a>
            <a name="paciente" href="[[rootPath]]paciente">paciente</a>
            <a name="doctor" href="[[rootPath]]doctor">doctor</a>
		  </iron-selector>
		</div>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button  drawer-toggle=""></paper-icon-button>
              <div main-title="">[[prop1]]</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <hce-mdc name="hce" id = "hce"></hce-mdc>
            <paciente-mdc name="paciente"></paciente-mdc>
            <doctor-mdc name="doctor"></doctor-mdc>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'App'
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  _pageChanged(page) {
    switch (page) {
      case 'doctor':
        import('./doctor.js');
        break;

      case 'paciente':
        import('./paciente.js');
        break;

      case 'hce':
        import('./hce.js');
        break;
    }
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'hce';
    } else if (['hce', 'paciente', 'doctor'].indexOf(page) !== -1) {
      this.page = page;
    } // Close a non-persistent drawer when the page & route are changed.


    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  static get observers() {
    return ['_routePageChanged(routeData.page)'];
  }
  atendCita(datos){
    this.$.hce.fillHce(datos);
  }

}

window.customElements.define('mdc-v2-app', MdcV2App);