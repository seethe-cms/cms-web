import './delta-button';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('delta-workflow')
export class DeltaWorkflow extends LitElement {
  static styles = css`
    ul,
    ul * {
      all: unset;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    #categories > h1 {
      margin-top: 50px;
      margin-bottom: 50px;
      /* TODO: temporary color for differenciation */
      color: red;
    }
    #page-header {
      background-color: grey;
      padding: 25px;
      display: flex;
      flex-direction: row-reverse;
    }
    #page-header > div {
      width: fit-content;
      display: flex;
      gap: 40px;
    }
  `;
  render() {
    return html`
      <main aria-label="Content Model">
        workflow
        <header id="page-header">
          <div role="presentation">
            <delta-button outlined>Add content category</delta-button>
            <delta-button>Add content type</delta-button>
          </div>
        </header>
        <nav id="categories">
          <!-- TODO: look for better html tag for title semantics -->
          <h1>Categories</h1>
          <ul>
            <li>
              <a href="/dev/">Cat 1</a>
            </li>
            <li>
              <a href="/dev/a">Cat 2</a>
            </li>
            <li>
              <a href="/dev/b">Cat 3</a>
            </li>
            <li>
              <a href="/dev/c">Cat 4</a>
            </li>
          </ul>
        </nav>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delta-workflow': DeltaWorkflow;
  }
}
