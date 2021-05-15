import './delta-button';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

//TODO "/dev" should be dynamic, based on vaadin-router "baseURL"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('delta-base')
export class DeltaBase extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      all: initial;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    *:not(style, script, svg, svg *),
    *:before:not(style, script, svg, svg *),
    *:before:not(style, script, svg, svg *) {
      all: inherit;
    }
    ul {
      display: flex;
      padding-left: 200px;
      padding-right: 200px;
    }
    nav {
      color: black;
      background-color: #9999ff;
    }
    li {
      display: contents;
    }
    a {
      display: inline-block;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    a:hover {
      cursor: pointer;
      background-color: #6600ff;
    }
    a:focus {
      cursor: pointer;
      background-color: #a200ff;
    }
  `;
  render() {
    return html`
      <header>
        <!-- TODO: Make this an element -->
        <nav>
          <ul>
            <li>
              <a href="/dev/content-model">Content Model</a>
            </li>
            <li>
              <a href="/dev/content">Content</a>
            </li>
            <li>
              <a href="/dev/workflow">Workflow</a>
            </li>
            <li>
              <a>Media</a>
            </li>
          </ul>
        </nav>
        <!-- -->
      </header>
      <!-- This label needs to be dynamic -->
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delta-base': DeltaBase;
  }
}
