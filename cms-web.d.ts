/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Base URl
     */
    baseURL: string | undefined;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'cms-web': MyElement;
    }
}
//# sourceMappingURL=cms-web.d.ts.map