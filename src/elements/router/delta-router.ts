/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
//import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('delta-router')
export class MyElement extends LitElement {
  /**
   * Base URl
   */
  @property()
  baseURL: string | undefined;

  @state()
  currentState = history.state;

  constructor() {
    super();
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
    const baseURLParts = this.baseURL?.split('/');
    const URLParts = location.pathname.split('/');
    if (baseURLParts === URLParts.slice(0, baseURLParts?.length)) {
      //TODO: do stuff
    }
    //history.pushState(undefined, document.title, '/yesy');
    //import('../elements/delta-content.js');
    return html` <slot name="${this.currentState}"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delta-router': MyElement;
  }
}
