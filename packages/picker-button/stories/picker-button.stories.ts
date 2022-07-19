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
import { html, TemplateResult } from '@spectrum-web-components/base';

import '../sp-picker-button.js';

export default {
    title: 'Picker Button/Sizes',
    component: 'sp-picker-button',
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
                options: ['s', 'm', 'l', 'xl'],
            },
        },
        open: {
            control: {
                type: 'boolean',
            },
        },
        quiet: {
            control: {
                type: 'boolean',
            },
        },
    },
};

type StoryArgs = {
    open: boolean;
    quiet: boolean;
    size: 's' | 'm' | 'l' | 'xl';
};

const Template = ({ size, quiet, open }: StoryArgs): TemplateResult => {
    return html`
        <sp-picker-button
            ?open=${open}
            ?quiet=${quiet}
            size=${size}
        ></sp-picker-button>
    `;
};

export const s = (args: StoryArgs): TemplateResult => Template(args);
s.args = { size: 's' };

export const m = (args: StoryArgs): TemplateResult => Template(args);
m.args = { size: 'm' };

export const l = (args: StoryArgs): TemplateResult => Template(args);
l.args = { size: 'l' };

export const XL = (args: StoryArgs): TemplateResult => Template(args);
XL.args = { size: 'xl' };
