/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let DeltaButton = class DeltaButton extends LitElement {
    constructor() {
        super(...arguments);
        this.outlined = false;
        this.shallow = false;
        this._role = 'presentation';
    }
    //class="${this.outlined ? 'outlined' : 'not-outlined'}"
    render() {
        return html `
      <button role="${ifDefined(this.role)}" part="main">
        <slot></slot>
      </button>
    `;
    }
};
DeltaButton.styles = css `
    /*:host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    */
    :host {
      all: inherit !important;
      display: contents !important;
    }

    button {
      display: inline-block;
      border-radius: 6px;
      user-select: none;
      cursor: pointer;
      box-sizing: border-box;
      /*transition: background-color 0.2s;*/
      background-color: var(--delta-button-background-color, #ab46b4);
      padding: 12px 20px;
      text-align: center;
      font-size: var(--delta-button-font-size, 1rem);
      font-weight: var(--delta-button-font-weight, 600);
      border: none;
      margin: 0;
      vertical-align: 0;
    }
    :host([outlined]:hover) > button {
      background-color: var(--delta-button-background-color-hover, #a920ad);
    }
    :host([outlined]) > button {
      border: solid;
      border-color: var(--delta-button-background-color, #ab46b4);
      border-width: 0.25rem;
      background-color: transparent;
      outline: none;
    }
    button:focus {
      box-shadow: 0 0 0 4px rgb(169, 32, 173, 0.5);
    }
  `;
__decorate([
    property({ type: Boolean })
], DeltaButton.prototype, "outlined", void 0);
__decorate([
    property({ type: Boolean })
], DeltaButton.prototype, "shallow", void 0);
__decorate([
    property({ reflect: true, attribute: 'role' })
], DeltaButton.prototype, "_role", void 0);
__decorate([
    property({})
], DeltaButton.prototype, "role", void 0);
DeltaButton = __decorate([
    customElement('delta-button')
], DeltaButton);
export { DeltaButton };
//# sourceMappingURL=delta-button.js.map