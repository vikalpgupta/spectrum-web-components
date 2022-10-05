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

const config = {
    spectrum: 'actionbar',
    components: [
        {
            name: 'action-bar',
            host: {
                selector: '.spectrum-ActionBar',
            },
            attributes: [
                {
                    type: 'boolean',
                    name: 'open',
                    selector: '.is-open',
                },
                {
                    type: 'boolean',
                    name: 'flexible',
                    selector: '.spectrum-ActionBar--flexible',
                },
                {
                    type: 'boolean',
                    name: 'emphasized',
                    selector: '.spectrum-ActionBar--emphasized',
                },
                {
                    type: 'enum',
                    name: 'variant',
                    values: [
                        '.spectrum-ActionBar--sticky',
                        '.spectrum-ActionBar--fixed',
                    ],
                },
            ],
            classes: [
                {
                    selector: '.spectrum-CloseButton',
                    name: 'close-button',
                }
            ],
            ids: [
                {
                    selector: '.spectrum-ActionBar-popover',
                    name: 'popover',
                },
            ],
            slots: [
                {
                    selector: '.spectrum-ActionGroup',
                    contents: 'sp-action-group',
                },
                {
                    selector: '.spectrum-FieldLabel',
                    contents: 'sp-field-label',
                }
            ]
        },
    ],
};

export default config;
