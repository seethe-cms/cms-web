import './delta-button';
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
export declare class DeltaSlotTest extends LitElement {
    layout: boolean;
    route: string;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'delta-slot-test': DeltaSlotTest;
    }
}
//# sourceMappingURL=delta-slot-test.d.ts.map