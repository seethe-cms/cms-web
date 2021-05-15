var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let DeltaBase = class DeltaBase extends LitElement {
    render() {
        return html `
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
};
DeltaBase.styles = css `
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
DeltaBase = __decorate([
    customElement('delta-base')
], DeltaBase);
export { DeltaBase };
//# sourceMappingURL=delta-base.js.map