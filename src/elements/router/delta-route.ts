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
@customElement('delta-route')
export class MyElement extends LitElement {
  /**
   * Base URl
   */
  @property()
  baseURL: string | undefined;

  @state()
  currentRoute: string | undefined;

  render() {
    //import('../elements/delta-content.js');
    return html`
      <slot name="page"> </slot>    
      <slot name="layout"> </slot>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delta-route': MyElement;
  }
}
