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
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    render() {
        //import('../elements/delta-content.js');
        return html `
      <slot name="page"> </slot>    
      <slot name="layout"> </slot>
      <slot></slot>
    `;
    }
};
__decorate([
    property()
], MyElement.prototype, "baseURL", void 0);
__decorate([
    state()
], MyElement.prototype, "currentRoute", void 0);
MyElement = __decorate([
    customElement('delta-route')
], MyElement);
export { MyElement };
//# sourceMappingURL=delta-route.js.map