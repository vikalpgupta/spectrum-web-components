/*
Copyright 2022 Adobe. All rights reserved.
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
    SizedMixin,
    TemplateResult,
} from '@spectrum-web-components/base';
import { property } from '@spectrum-web-components/base/src/decorators.js';
import { ButtonBase } from '@spectrum-web-components/button/src/ButtonBase.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-chevron200.js';

import styles from './picker-button.css.js';

/**
 * @element sp-picker-button
 */
export class PickerButton extends SizedMixin(ButtonBase) {
    public static override get styles(): CSSResultArray {
        return [styles];
    }

    @property({ reflect: true })
    position: 'left' | 'right' = 'right';

    protected override render(): TemplateResult {
        return html`
            <div class="root textuiicon">
                <div class="spectrum-PickerButton-fill">
                    <span class="spectrum-PickerButton-label is-placeholder">
                        All
                    </span>
                    <slot name="icon">
                        <sp-icon-chevron200
                            class="spectrum-PickerButton-UIIcon spectrum-Icon spectrum-UIIcon-ChevronDown200"
                        ></sp-icon-chevron200>
                    </slot>
                </div>
            </div>
        `;
    }
}
