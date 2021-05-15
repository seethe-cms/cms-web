/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('cms-web')
export class MyElement extends LitElement {
  static styles = css`
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

  /**
   * Base URl
   */
  @property()
  baseURL: string | undefined;

  /**
   * The number of times the button has been clicked.
   */
  @state()
  count = 0;

  connectedCallback() {
    super.connectedCallback();
    let options;
    if (this.baseURL === undefined) {
      options = undefined;
    } else {
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
            path: 'content-model',
            component: 'delta-content-model',
          },
          {
            path: 'content',
            component: 'delta-content',
          },
          {
            path: 'workflow',
            component: 'delta-workflow',
          },
        ],
      },
    ]);
  }

  render() {
    return html``;
  }

  createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cms-web': MyElement;
  }
}
