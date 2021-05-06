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
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let DeltaTextButton = class DeltaTextButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
    }
    render() {
        return html `
      <button
        type="button"
        @click="${() => {
            console.log('click');
        }}"
      >
        <slot></slot>
      </button>
    `;
    }
};
DeltaTextButton.styles = css `
    :host {
      box-sizing: border-box;
      --delta-button-font-size: 1rem;
      --delta-button-font-weight: 600;
    }

    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    button {
      background-color: #4caf50; /* Green */
      border: none;
      color: white;
      padding: 15px 25px;
      text-align: center;
      display: inline-block;
      font-size: var(--delta-button-font-size);
      font-weight: 600;
    }
  `;
__decorate([
    property()
], DeltaTextButton.prototype, "label", void 0);
DeltaTextButton = __decorate([
    customElement('delta-text-button')
], DeltaTextButton);
export { DeltaTextButton };
//# sourceMappingURL=delta-text-button.js.map