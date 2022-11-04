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

import type { Overlay } from './Overlay.js';

class Stack {
    private overlaysAuto = new Set<Overlay>();
    private overlaysHint = new Set<Overlay>();
    private overlaysManual = new Set<Overlay>();

    add(overlay: Overlay): void {
        if (
            this.overlaysAuto.has(overlay) ||
            this.overlaysHint.has(overlay) ||
            this.overlaysManual.has(overlay)
        )
            return;
        switch (overlay.type) {
            case 'modal':
            case 'page':
            case 'auto': {
                this.overlaysAuto.add(overlay);
                break;
            }
            case 'hint': {
                this.overlaysHint.forEach((hint) => (hint.open = false));
                this.overlaysHint = new Set<Overlay>([overlay]);
                break;
            }
            case 'manual': {
                this.overlaysManual.add(overlay);
                break;
            }
        }
        this.manageEventListeners();
    }

    delete(overlay: Overlay): void {
        this.overlaysAuto.delete(overlay);
        this.overlaysHint.delete(overlay);
        this.overlaysManual.delete(overlay);
    }

    private get document(): Document {
        return document.body.ownerDocument /* c8 ignore next */ || document;
    }

    private async manageEventListeners(): Promise<void> {
        this.document.removeEventListener('pointerup', this.handleMouse);
        this.document.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('resize', this.handleResize);
        // Wait for any initiating event to pass through the DOM
        await new Promise((res) => requestAnimationFrame(res));
        if (this.overlaysAuto.size) {
            this.document.addEventListener('pointerup', this.handleMouse);
            this.document.addEventListener('keydown', this.handleKeydown);
        }
        if (
            this.overlaysAuto.size ||
            this.overlaysHint.size ||
            this.overlaysManual.size
        ) {
            window.addEventListener('resize', this.handleResize);
        }
    }

    private handleKeydown = (event: KeyboardEvent): void => {
        if (event.code !== 'Escape') return;
        if (!this.overlaysAuto.size) return;

        const last = [...this.overlaysAuto.values()].at(-1);
        if (!last) return;
        this.closeOverlay(last);
    };

    private handleMouse = (event: Event): void => {
        if (!this.overlaysAuto.size) return;

        const last = [...this.overlaysAuto.values()].at(-1);
        if (!last) return;
        const composedPath = event.composedPath();
        const overlayInPath = composedPath.some((el) => el === last);
        if (!overlayInPath) {
            this.closeOverlay(last);
        }
    };

    private handleResize = (): void => {
        this.overlaysAuto.forEach((overlay) => overlay.placeOverlay());
        this.overlaysHint.forEach((overlay) => overlay.placeOverlay());
        this.overlaysManual.forEach((overlay) => overlay.placeOverlay());
    };

    private closeOverlay(overlay: Overlay): void {
        this.overlaysAuto.delete(overlay);
        overlay.open = false;
        if (overlay.type !== 'hint' && overlay.triggerElement) {
            requestAnimationFrame(() => {
                (overlay.triggerElement as HTMLElement).focus?.();
            });
        }
    }
}

export const overlayStack = new Stack();
