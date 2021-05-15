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
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    render() {
        return html `
      <main aria-label="Content Model">
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
};
MyElement.styles = css `
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
MyElement = __decorate([
    customElement('a-elem')
], MyElement);
export { MyElement };
//# sourceMappingURL=content.js.map