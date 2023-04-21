/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    CSSResultArray,
    html,
    SpectrumElement,
    TemplateResult,
} from '@spectrum-web-components/base';
import { property } from '@spectrum-web-components/base/src/decorators.js';

import styles from './thumbnail.css.js';

export type ThumbnailSize =
    | 50
    | 75
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 1000;
const validSizes: ThumbnailSize[] = [
    50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];
const defaultSize = validSizes[6];

/**
 * @element sp-thumbnail
 *
 * @slot image - image element to present in the Thumbnail
 */

export class Thumbnail extends SpectrumElement {
    public static override get styles(): CSSResultArray {
        return [styles];
    }

    @property({ type: String, reflect: true })
    public background?: string;

    @property({ type: Boolean, reflect: true })
    public cover = false;

    @property({ type: Number, reflect: true })
    public get size(): ThumbnailSize {
        return this._size;
    }

    public set size(value: ThumbnailSize) {
        const size = value;
        const validSize = (
            validSizes.includes(size) ? size : defaultSize
        ) as ThumbnailSize;
        if (validSize) {
            this.setAttribute('size', `${validSize}`);
        }
        if (this._size === validSize) {
            return;
        }
        const oldSize = this._size;
        this._size = validSize;
        this.requestUpdate('size', oldSize);
    }

    private _size = defaultSize;

    protected override render(): TemplateResult {
        return html`
            <slot></slot>
        `;
    }
}
