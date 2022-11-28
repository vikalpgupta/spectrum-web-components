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

import { Placement } from '@floating-ui/dom';
import { html, PropertyValues, SpectrumElement } from '@spectrum-web-components/base';
import { property, query, queryAssignedElements, state } from '@spectrum-web-components/base/src/decorators.js';
import { ifDefined, styleMap } from '@spectrum-web-components/base/src/directives.js';
import { ElementResolutionController, elementResolverUpdatedSymbol } from '@spectrum-web-components/reactive-controllers/src/ElementResolution.js';
import {
    conditionAttributeWithId,
} from '@spectrum-web-components/base/src/condition-attribute-with-id.js';

import styles from './overlay-element.css.js';
import { updateOverlayPosition } from './placement.js';
import { VirtualTrigger } from './VirtualTrigger.js';

export const supportTopLayer = CSS.supports('selector(:open)');
const LONGPRESS_DURATION = 300;
let LONGPRESS_TIMEOUT: ReturnType<typeof setTimeout>;

export type LongpressEvent = {
    source: 'pointer' | 'keyboard';
};

export const LONGPRESS_INSTRUCTIONS = {
    touch: 'Double tap and long press for additional options',
    keyboard: 'Press Space or Alt+Down Arrow for additional options',
    mouse: 'Click and hold for additional options',
};

type OpenableElement = HTMLElement & {
    open: boolean;
    tipElement?: HTMLElement;
    updateComplete?: Promise<void>;
};

export class Overlay extends SpectrumElement {
    static override styles = [styles];
    @property({type: Boolean})
    delayed = false;

    @query('dialog')
    dialogEl!: HTMLDialogElement & { 
        showPopover(): void;
        hidePopover(): void;
    };

    @queryAssignedElements({ flatten: true })
    elements!: OpenableElement[];

    @property({ type: String })
    public override id = '';

    protected longpressed = false;

    @property()
    offset: number | [ number, number ] = 6;

    @property({type: Boolean})
    open = false;

    static openCount = 1;

    @property()
    placement?: Placement;

    @property({ attribute: 'receives-focus' })
    receivesFocus: 'true' | 'false' | 'auto' = 'auto';

    @query('slot')
    slotEl!: HTMLSlotElement;

    @property()
    trigger?: string;

    @state()
    triggerElement: HTMLElement | VirtualTrigger | null = null;

    @state()
    triggerInteraction?: 'click' | 'longpress' | 'hover';

    @property()
    type: 'auto' | 'hint' | 'manual' | 'modal' | 'page' = 'hint';

    private elementResolver = new ElementResolutionController(this);

    private get usesDialog(): boolean {
        return this.type === 'modal' || this.type === 'page';
    }

    private get popoverValue(): 'auto' | 'manual' | undefined {
        switch (this.type) {
            case 'modal':
            case 'page':
                return undefined;
            case 'hint':
                return 'manual';
            default:
                return this.type;
        }
    }

    protected manageChildren(open: boolean): void {
        this.elements.forEach(el => {
            if (typeof el.open !== 'undefined') {
                el.open = open;
            }
        });
    }

    protected manageDialogOpen(): void {

    }

    protected managePopoverOpen(): void {
        const doClose = (cb = () => { return; }): void => {
            this.elements[0]?.addEventListener('transitionend', cb, {
                once: true
            });
            this.manageChildren(false);
        }
        if (supportTopLayer) {
            if (this.open) {
                if (!this.dialogEl.matches(':open')) {
                    this.dialogEl.showPopover();
                }
            } else {
                if (this.dialogEl.matches(':open')) {
                    doClose(() => {
                        if (!this.open) {
                            this.dialogEl.hidePopover();
                        }
                    });
                } else {
                    doClose();
                }
            }
        } else {
            if (this.open) {

            } else {
                doClose();
            }
        }
    }

    protected get requiresPosition(): boolean {
        console.log(this.type, this.open, this.triggerElement, this.placement);
        if (this.type === 'page' || !this.open) return false;
        if (!this.triggerElement || (!this.placement && this.type !== 'hint')) return false;
        return true;
    }

    protected managePosition(): void {
        if (!this.requiresPosition) return;

        const offset = this.offset || 0;
        const trigger = this.triggerElement as HTMLElement;
        const placement = this.placement as Placement || 'right';
        const tipElement = this.elements.find(
            (el) => el.tipElement
        )?.tipElement;

        updateOverlayPosition(
            this.dialogEl,
            {
                // delayed?: boolean,
                offset,
                placement,
                // notImmediatelyClosable?: boolean, // rename or place behind other API options
                // receivesFocus?: 'auto';
                // root?: HTMLElement;
                trigger,
                type: this.type,
            },
            {
                elements: this.elements,
                tipElement,
            }
        );
    }

    protected async manageOpen(): Promise<void> {
        if (!this.hasUpdated) {
            await this.updateComplete;
        }
        if (this.usesDialog) {
            this.manageDialogOpen();
        } else {
            this.managePopoverOpen();
        }
        if (this.open) {
            Overlay.openCount += 1;
            this.manageChildren(this.open);
            this.managePosition();
        }
    }

    private releaseAriaDescribedby = () => { return; };

    protected manageTriggerElement(triggerElement: HTMLElement | null): void {
        if (triggerElement) {
            triggerElement.removeEventListener('click', this.handleClick);
            triggerElement.removeEventListener('focusin', this.handleFocusin);
            triggerElement.removeEventListener('focusout', this.handleFocusout);
            triggerElement.removeEventListener('pointerenter', this.handlePointerenter);
            triggerElement.removeEventListener('pointerleave', this.handlePointerleave);
            triggerElement.addEventListener('pointerdown', this.handlePointerdown);
            triggerElement.addEventListener('keydown', this.handleKeydown);
            triggerElement.addEventListener('keyup', this.handleKeyup);
            triggerElement.addEventListener('longpress', this.handleLongpress);
            this.releaseAriaDescribedby();
        }
        if (
            !this.triggerElement ||
            !!(this.triggerElement as VirtualTrigger).updateBoundingClientRect
        ) return;
        const nextTriggerElement = this.triggerElement as HTMLElement;
        switch (this.triggerInteraction) {
            case 'click':
                nextTriggerElement.addEventListener('click', this.handleClick);
                return;
            case 'longpress':
                nextTriggerElement.addEventListener('pointerdown', this.handlePointerdown);
                nextTriggerElement.addEventListener('keydown', this.handleKeydown);
                nextTriggerElement.addEventListener('keyup', this.handleKeyup);
                nextTriggerElement.addEventListener('longpress', this.handleLongpress);
                return;
            case 'hover':
                nextTriggerElement.addEventListener('focusin', this.handleFocusin);
                nextTriggerElement.addEventListener('focusout', this.handleFocusout);
                nextTriggerElement.addEventListener('pointerenter', this.handlePointerenter);
                nextTriggerElement.addEventListener('pointerleave', this.handlePointerleave);
                if (this.receivesFocus === 'true') return;

                const releaseAriaDescribedby = conditionAttributeWithId(nextTriggerElement, 'aria-describedby', [
                    this.id,
                ]);
                this.releaseAriaDescribedby = () => {
                    releaseAriaDescribedby();
                    this.releaseAriaDescribedby = () => { return; };
                }
                return;
        }
    }

    private handlePointerdown = (event: PointerEvent): void => {
        if (!this.triggerElement) return;
        if (event.button !== 0) return;
        const triggerElement = this.triggerElement as HTMLElement;
        this.longpressed = false;
        triggerElement.addEventListener('pointerup', this.handlePointerup);
        triggerElement.addEventListener('pointercancel', this.handlePointerup);
        LONGPRESS_TIMEOUT = setTimeout(() => {
            if (!triggerElement) return;
            triggerElement.dispatchEvent(
                new CustomEvent<LongpressEvent>('longpress', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        source: 'pointer',
                    },
                })
            );
        }, LONGPRESS_DURATION);
    }

    private handlePointerup = (): void => {
        clearTimeout(LONGPRESS_TIMEOUT);
        if (!this.triggerElement) return;
        if (this.longpressed) {
            this.open = true;
        }
        this.longpressed = false;
        const triggerElement = this.triggerElement as HTMLElement;
        triggerElement.removeEventListener('pointerup', this.handlePointerup);
        triggerElement.removeEventListener('pointercancel', this.handlePointerup);
    }

    /**
     * @private
     */
    protected handleKeydown = (event: KeyboardEvent): void => {
        const { code, altKey } = event;
        if (code === 'Space' || (altKey && code === 'ArrowDown')) {
            if (code === 'ArrowDown') {
                event.stopPropagation();
                event.stopImmediatePropagation();
            }
        }
    }

    protected handleKeyup = (event: KeyboardEvent): void => {
        const { code, altKey } = event;
        if (code === 'Space' || (altKey && code === 'ArrowDown')) {
            event.stopPropagation();
            this.dispatchEvent(
                new CustomEvent<LongpressEvent>('longpress', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        source: 'keyboard',
                    },
                })
            );
        }
    }

    protected handleClick = (): void => {
        this.open = true;
        const triggerElement = this.triggerElement as HTMLElement;
        triggerElement.removeEventListener('click', this.handleClick);
    }

    private focusedin = false;

    protected handleFocusin = (): void => {
        this.open = true;
        this.focusedin = true;
    }

    protected handleFocusout = (): void => {
        this.focusedin = false;
        if (this.pointerentered) return;
        this.open = false;
    }

    private pointerentered = false;

    protected handlePointerenter = (): void => {
        this.open = true;
        this.pointerentered = true;
    }

    protected handlePointerleave = (): void => {
        this.pointerentered = false;
        const triggerElement = this.triggerElement as HTMLElement;
        if (this.focusedin && triggerElement.matches(':focus-visible')) return;
        this.open = false;
    }

    protected handleLongpress = (): void => {
        this.open = true;
        this.longpressed = true;
    }

    protected handlePopoverhide(): void {
        this.open = false;
        this.dispatchEvent(new Event('popoverhide'));
        const triggerElement = this.triggerElement as HTMLElement;
        if (this.triggerInteraction === 'click') {
            requestAnimationFrame(() => {
                triggerElement.addEventListener('click', this.handleClick);
            });
        }
    }

    protected handlePopovershow(): void {
        this.dispatchEvent(new Event('popovershow'));
    }

    override willUpdate(changes: PropertyValues): void {
        if (!this.hasAttribute('id')) {
            this.setAttribute(
                'id',
                `${this.tagName.toLowerCase()}-${crypto.randomUUID().slice(0,8)}`
            );
        }
        if (changes.has('open') && (typeof changes.get('open') !== 'undefined' || this.open)) {
            this.manageOpen();
        }
        if (changes.has('trigger')) {
            const [id, interaction] = this.trigger?.split('@') || [];
            this.elementResolver.selector = id ? `#${id}` : '';
            this.triggerInteraction = interaction as "click" | "longpress" | "hover" | undefined;
        }
        if (changes.has(elementResolverUpdatedSymbol)) {
            this.triggerElement = this.elementResolver.element;
            this.manageTriggerElement(changes.get('triggerElement'));
        }
    }

    override render() {
        return html`
            <dialog
                @popoverhide=${this.handlePopoverhide}
                @popovershow=${this.handlePopovershow}
                popover=${ifDefined(this.popoverValue)}
                style=${styleMap({
                    '--swc-overlay-z-index': Overlay.openCount.toString()
                })}
            ><slot></slot></dialog>
        `;
    }
}