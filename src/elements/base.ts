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
export class MyElement extends LitElement {
  static styles = css`
    header > nav {
      color: black;
      background-color: #9999ff;
      display: flex;
      padding-left: 200px;
      padding-right: 200px;
    }
    header > nav > * {
      all: unset;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    header > nav > *:hover {
      cursor: pointer;
      background-color: #6600ff;
    }
    header > nav > *:focus {
      cursor: pointer;
      background-color: #a200ff;
    }
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
      flex-direction: column;
      align-items: flex-end;
    }
    #page-header > div {
      width: fit-content;
      display: flex;
      gap: 40px;
    }
  `;
  render() {
    return html`
      <header>
        <!-- TODO: Make this an element -->
        <nav>
          <a href="/dev/">Content Model</a>
          <a href="/dev/a">Content</a>
          <a href="/dev/b">Workflow</a>
          <a href="/dev/c">Media</a>
        </nav>
        <!-- -->
      </header>
      <div id="page-header">
        <div role="presentation">
          <delta-button outlined>Add content category</delta-button>
          <delta-button>Add content type</delta-button>
        </div>
      </div>
      <main>
        <div id="categories">
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
        </div>
        <slot></slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delta-base': MyElement;
  }
}
