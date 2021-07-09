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
//import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super();
        this.currentState = history.state;
        this.addEventListener('click', (e) => {
            //TODO: this shouldn't be here
            const customAnchors = ['', ''];
            const { target } = e;
            if (target instanceof HTMLElement) {
                const tagName = target.tagName;
                const isCustomAnchor = customAnchors.some((element) => {
                    tagName === element;
                });
                if (tagName === 'A' || isCustomAnchor) {
                    // do some Router shit
                }
            }
        });
    }
    render() {
        var _a;
        const baseURLParts = (_a = this.baseURL) === null || _a === void 0 ? void 0 : _a.split('/');
        const URLParts = location.pathname.split('/');
        if (baseURLParts === URLParts.slice(0, baseURLParts === null || baseURLParts === void 0 ? void 0 : baseURLParts.length)) {
            //TODO: do stuff
        }
        //history.pushState(undefined, document.title, '/yesy');
        //import('../elements/delta-content.js');
        return html ` <slot name="${this.currentState}"></slot> `;
    }
};
__decorate([
    property()
], MyElement.prototype, "baseURL", void 0);
__decorate([
    state()
], MyElement.prototype, "currentState", void 0);
MyElement = __decorate([
    customElement('delta-router')
], MyElement);
export { MyElement };
//# sourceMappingURL=delta-router.js.map