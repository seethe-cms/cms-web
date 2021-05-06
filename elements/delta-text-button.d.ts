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
export declare class DeltaTextButton extends LitElement {
    static styles: import("lit").CSSResultGroup;
    label: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'delta-text-button': DeltaTextButton;
    }
}
//# sourceMappingURL=delta-text-button.d.ts.map