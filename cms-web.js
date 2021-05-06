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
import { customElement, property, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        let options;
        if (this.baseURL === undefined) {
            options = undefined;
        }
        else {
            options = {
                baseUrl: this.baseURL,
            };
        }
        const router = new Router(this.renderRoot, options);
        router.setRoutes([
            {
                path: '/',
                component: 'delta-base',
                children: [
                    {
                        path: 'a',
                        component: 'a-elem',
                    },
                    {
                        path: 'b',
                        component: 'delta-button',
                    },
                    {
                        path: 'c',
                        component: 'c-elem',
                    },
                ],
            },
        ]);
    }
    render() {
        return html ``;
    }
    createRenderRoot() {
        return this;
    }
};
MyElement.styles = css `
    :host {
      box-sizing: border-box;
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
  `;
__decorate([
    property()
], MyElement.prototype, "baseURL", void 0);
__decorate([
    state()
], MyElement.prototype, "count", void 0);
MyElement = __decorate([
    customElement('cms-web')
], MyElement);
export { MyElement };
//# sourceMappingURL=cms-web.js.map