/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

type Role =
  | 'button'
  | 'checkbox'
  | 'gridcell'
  | 'link'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'option'
  | 'progressbar'
  | 'radio'
  | 'scrollbar'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'switch'
  | 'tab'
  | 'tabpanel'
  | 'textbox'
  | 'treeitem'
  | 'combobox'
  | 'grid'
  | 'listbox'
  | 'menu'
  | 'menubar'
  | 'radiogroup'
  | 'tablist'
  | 'tree'
  | 'treegrid'
  | 'application'
  | 'article'
  | 'cell'
  | 'columnheader'
  | 'definition'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'group'
  | 'heading'
  | 'img'
  | 'list'
  | 'listitem'
  | 'math'
  | 'none'
  | 'note'
  | 'presentation'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'separator'
  | 'table'
  | 'term'
  | 'toolbar'
  | 'tooltip'
  | 'banner'
  | 'complementary'
  | 'contentinfo'
  | 'form'
  | 'main'
  | 'navigation'
  | 'region'
  | 'search'
  | 'alert'
  | 'log'
  | 'marquee'
  | 'status'
  | 'timer'
  | 'alertdialog'
  | 'dialog';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('delta-button')
export class DeltaButton extends LitElement {
  static styles = css`
    /*:host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    */
    :host {
      all: inherit !important;
      display: contents !important;
    }

    button {
      display: inline-block;
      border-radius: 6px;
      user-select: none;
      cursor: pointer;
      box-sizing: border-box;
      /*transition: background-color 0.2s;*/
      background-color: var(--delta-button-background-color, #ab46b4);
      padding: 12px 20px;
      text-align: center;
      font-size: var(--delta-button-font-size, 1rem);
      font-weight: var(--delta-button-font-weight, 600);
      border: none;
      margin: 0;
      vertical-align: 0;
    }
    :host([outlined]:hover) > button {
      background-color: var(--delta-button-background-color-hover, #a920ad);
    }
    :host([outlined]) > button {
      border: solid;
      border-color: var(--delta-button-background-color, #ab46b4);
      border-width: 0.25rem;
      background-color: transparent;
      outline: none;
    }
    button:focus {
      box-shadow: 0 0 0 4px rgb(169, 32, 173, 0.5);
    }
  `;

  @property({ type: Boolean })
  outlined = false;

  @property({ type: Boolean })
  shallow = false;

  @property({ reflect: true, attribute: 'role' })
  // @ts-expect-error: Unused Locals
  private _role = 'presentation';

  //TODO replace with role="${ifDefined(this.role)}", ifDefined currently removes the whole element, lit bug?
  @property({})
  private role: Role | undefined;

  //class="${this.outlined ? 'outlined' : 'not-outlined'}"
  render() {
    return html`
      <button role="${ifDefined(this.role)}" part="main">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delta-button': DeltaButton;
  }
}
