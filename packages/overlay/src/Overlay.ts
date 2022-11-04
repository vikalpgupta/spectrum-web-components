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
    html,
    PropertyValues,
    SpectrumElement,
    TemplateResult,
} from '@spectrum-web-components/base';
import {
    property,
    query,
    queryAssignedElements,
    queryAssignedNodes,
    state,
} from '@spectrum-web-components/base/src/decorators.js';
import { ifDefined } from '@spectrum-web-components/base/src/directives.js';
import { autoUpdate, Placement } from '@floating-ui/dom';
import { overlayStack } from './stack.js';
import { firstFocusableIn } from '@spectrum-web-components/shared/src/first-focusable-in.js';

import styles from './overlay.css.js';
import { updateOverlayPosition } from './placement.js';
import type { VirtualTrigger } from './VirtualTrigger.js';
import { OverlayOptions, TriggerInteractions } from './overlay-types.js';

type OpenableElement = HTMLElement & {
    open: boolean;
    tipElement?: HTMLElement;
    updateComplete?: Promise<void>;
};

export class Overlay extends SpectrumElement {
    static override styles = [styles];

    @property({ type: Boolean })
    delayed = false;

    @query('dialog')
    dialog!: HTMLDialogElement;

    @queryAssignedElements({ flatten: true })
    elements!: OpenableElement[];

    @queryAssignedNodes({ flatten: true })
    nodes!: Node[];

    @property({ type: Number })
    offset = 6;

    @property({ type: Boolean, reflect: true })
    open = false;

    private placed = false;

    @property()
    placement?: Placement;

    @property({ attribute: 'receives-focus' })
    receivesFocus: 'true' | 'false' | 'auto' = 'auto';

    @property()
    trigger?: `${string}${`@${string}` | ''}`;

    @state()
    triggerElement?: HTMLElement | VirtualTrigger;

    @state()
    triggerInteraction?: 'click' | 'longpress' | 'hover';

    @property()
    type: 'modal' | 'page' | 'hint' | 'auto' | 'manual' = 'hint';

    private get usesDialog(): boolean {
        return this.type === 'modal' || this.type === 'page';
    }

    private get popoverType(): undefined | 'auto' | 'manual' | 'hint' {
        const popoverTypes = ['auto', 'manual', 'hint'];
        const type = this.type as unknown as 'auto' | 'manual' | 'hint';
        return popoverTypes.includes(type) ? type : undefined;
    }

    private cleanup = (): void => {
        return;
    };

    public async placeOverlay(): Promise<void> {
        if (this.type === 'page' || !this.open) return;
        if (!this.triggerElement || !this.placement) return;
        if (!this.elements.length && !this.nodes.length) return;

        const tipElement = this.elements.find(
            (el) => el.tipElement
        )?.tipElement;
        overlayStack.add(this);
        await Promise.all(
            this.elements.map(async (el): Promise<void> => {
                if (el.updateComplete) {
                    await el.updateComplete;
                }
            })
        );
        this.cleanup = autoUpdate(
            this.triggerElement,
            this.dialog,
            async () => {
                if (!this.triggerElement || !this.placement) return;
                if (this.placed && this.type !== 'modal') {
                    this.close();
                    return;
                }
                this.placed = true;

                await updateOverlayPosition(
                    this.dialog,
                    {
                        // abortPromise?: Promise<boolean>,
                        // delayed?: boolean,
                        offset: this.offset,
                        // skidding?: number, // supporting multi-axis
                        placement: this.placement,
                        // notImmediatelyClosable?: boolean, // rename or place behind other API options
                        // receivesFocus?: 'auto';
                        // root?: HTMLElement;
                        trigger: this.triggerElement,
                        type: this.type,
                    },
                    {
                        elements: this.elements,
                        tipElement,
                    }
                );
            }
        );
    }

    private async manageOpen(): Promise<void> {
        if (this.open) {
            if (this.usesDialog) {
                this.dialog.showModal();
            } else {
                if (CSS.supports('selector(:open)')) {
                } else {
                    this.dialog.dispatchEvent(
                        new Event('show', { composed: true, bubbles: true })
                    );
                }
            }
            await this.placeOverlay();
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    let focusEl = null as HTMLElement | null;
                    this.elements.forEach((element: OpenableElement): void => {
                        if (typeof element.open !== 'undefined') {
                            element.open = true;
                        }
                        if (!focusEl) {
                            focusEl = firstFocusableIn(element);
                        }
                    });
                    requestAnimationFrame(() => {
                        if (focusEl) focusEl.focus();
                        this.dispatchEvent(
                            new Event('sp-opened', {
                                bubbles: true,
                                composed: true,
                            })
                        );
                    });
                });
            });
        } else {
            overlayStack.delete(this);
            this.placed = false;
            this.cleanup();
            let hasSelfManagedChild = false;
            const close = (): void => {
                if (this.usesDialog) {
                    this.dialog.close();
                } else {
                    this.dialog.dispatchEvent(
                        new Event('hide', { composed: true, bubbles: true })
                    );
                }
                this.dispatchEvent(
                    new Event('sp-closed', { bubbles: true, composed: true })
                );
            };
            this.elements.forEach((element: OpenableElement): void => {
                if (typeof element.open !== 'undefined') {
                    element.open = false;
                    hasSelfManagedChild = true;
                    element.addEventListener(
                        'transitionend',
                        () => {
                            close();
                        },
                        { once: true }
                    );
                }
            });
            if (!hasSelfManagedChild) {
                close();
            }
        }
    }

    private manageTrigger(changes: PropertyValues<this>): void {
        const oldTriggerElement = changes.get('triggerElement') as HTMLElement;
        if (oldTriggerElement && changes.get('triggerInteraction')) {
            if (changes.get('triggerInteraction') === 'click') {
                oldTriggerElement.removeEventListener('click', this.doOpen);
            }
            if (changes.get('triggerInteraction') === 'longpress') {
                oldTriggerElement.removeEventListener('longpress', this.doOpen);
            }
            if (changes.get('triggerInteraction') === 'hover') {
                oldTriggerElement.removeEventListener('focusin', this.doOpen);
                oldTriggerElement.removeEventListener('focusout', this.doClose);
                oldTriggerElement.removeEventListener(
                    'pointerenter',
                    this.doOpen
                );
                oldTriggerElement.removeEventListener(
                    'pointerleave',
                    this.doClose
                );
            }
        }
        const triggerElement = this.triggerElement as HTMLElement;
        if (
            triggerElement &&
            !!triggerElement.tagName &&
            this.triggerInteraction
        ) {
            if (this.triggerInteraction === 'click') {
                triggerElement.addEventListener('click', this.doOpen);
            }
            if (this.triggerInteraction === 'longpress') {
                triggerElement.addEventListener('longpress', this.doOpen);
            }
            if (this.triggerInteraction === 'hover') {
                triggerElement.addEventListener('focusin', this.doOpen);
                triggerElement.addEventListener('focusout', this.doClose);
                triggerElement.addEventListener('pointerenter', this.doOpen);
                triggerElement.addEventListener('pointerleave', this.doClose);
            }
        }
    }

    public doOpen = (): void => {
        this.open = true;
    };

    public doClose = (): void => {
        this.open = false;
    };

    public close = (): void => {
        this.open = false;
    };

    public static open(
        target: HTMLElement,
        interaction: TriggerInteractions,
        content: HTMLElement,
        options: OverlayOptions
    ): () => void {
        const overlay = new Overlay();
        overlay.append(content);
        overlay.triggerElement = target;
        overlay.open = true;
        overlay.type =
            interaction === 'modal'
                ? 'modal'
                : interaction === 'hover'
                ? 'hint'
                : 'auto';
        overlay.offset = options.offset || 6;
        overlay.placement = options.placement;
        // This is super dirty...find a better way.
        // Maybe imperative open should go _at the end_ of everything?
        // Having an option is likely useful.
        // Make imperative overlays less useful?
        // Delete the imperative approach to an overlay?
        // Possibly the giving all of the responsiblities to the user is the best path.
        if (target.shadowRoot) {
            target.shadowRoot.append(overlay);
        } else {
            target.insertAdjacentElement('afterbegin', overlay);
        }
        return overlay.close;
    }

    protected override willUpdate(changes: PropertyValues<this>): void {
        if (changes.has('trigger')) {
            const [triggerId, interaction] = this.trigger?.split('@') || [];
            this.triggerInteraction = interaction as
                | 'click'
                | 'longpress'
                | 'hover'
                | undefined;
            if (triggerId) {
                const parent = this.getRootNode() as HTMLElement;
                this.triggerElement =
                    (parent.querySelector(`#${triggerId}`) as HTMLElement) ??
                    undefined;
            }
        }
    }

    public static update(): void {
        return;
    }

    protected override render(): TemplateResult {
        return html`
            <dialog
                @close=${() => (this.open = false)}
                @cancel=${() => (this.open = false)}
                popover=${ifDefined(this.popoverType)}
            >
                <slot></slot>
            </dialog>
        `;
    }

    protected override updated(changes: PropertyValues<this>): void {
        super.updated(changes);
        if (changes.has('open')) {
            if (this.open || typeof changes.get('open') !== 'undefined')
                this.manageOpen();
        } else if (this.open && changes.has('triggerElement')) {
            this.placeOverlay();
        }
        if (
            changes.has('triggerElement') ||
            changes.has('triggerInteraction')
        ) {
            this.manageTrigger(changes);
        }
    }

    public override disconnectedCallback(): void {
        this.cleanup?.();
        super.disconnectedCallback();
    }
}

/**
?open=${this.isOpen}
?delayed=${}
offset=${Number | [Number, Number]}
placement=${placement}
received-focus=${‘true’ | ‘false’ | ‘auto’ (default)}
trigger=${idOfTrigger AND event style of that trigger as ${string}@${string}} .triggerElement(s)=${trigger Element by reference}
type=${type}
 */
