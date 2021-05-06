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
export declare class DeltaButton extends LitElement {
    static styles: import("lit").CSSResultGroup;
    outlined: boolean;
    shallow: boolean;
    private _role;
    private role;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'delta-button': DeltaButton;
    }
}
//# sourceMappingURL=delta-button.d.ts.map