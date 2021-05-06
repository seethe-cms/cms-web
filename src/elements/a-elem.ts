/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('a-elem')
export class MyElement extends LitElement {
  render() {
    return html` <div>a</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'a-elem': MyElement;
  }
}
