import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
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
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
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
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="hce" href="[[rootPath]]hce">hce</a>
            <a name="paciente" href="[[rootPath]]paciente">paciente</a>
            <a name="doctor" href="[[rootPath]]doctor">doctor</a>
          </iron-selector>
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
            <hce-mdc name="hce"></hce-mdc>
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
        value: 'mdc-v2-app'
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
   }

   // Close a non-persistent drawer when the page & route are changed.
   if (!this.$.drawer.persistent) {
     this.$.drawer.close();
   }
  }
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
}

window.customElements.define('mdc-v2-app', MdcV2App);
