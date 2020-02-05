System.register(["./storybook-preview-e56323fc.js","./lit-element-12678eac.js","./tslib.es6-818760f0.js","./if-defined-f00fff49.js","./focusable-ab32921b.js","./iconset-svg-469263e3.js","./index-ea65cf5a.js","./observe-slot-text-d9887db2.js","./index-777892dd.js"],(function(t){"use strict";var e,a,r,i,s,o,n,l,c,u,b,p,d,v,h,m,f,g;return{setters:[function(t){e=t.n,a=t.c,r=t.f,i=t.g,s=t.h,o=t.d,n=t.j,l=t.k,c=t.E,u=t.y,b=t.K},function(t){p=t.c,d=t.p,v=t.L},function(t){h=t._},function(){},function(t){m=t.F,f=t.a},function(){},function(){},function(){},function(t){g=t.g}],execute:function(){function y(){var t=e([":host{display:flex;position:relative;z-index:0;margin:0;padding:0 var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100));vertical-align:top;border-bottom-color:var(--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200))}#selectionIndicator{position:absolute;left:0;z-index:0;transition:transform var(--spectrum-tabs-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)) ease-in-out;transform-origin:top left;border-radius:var(--spectrum-tabs-rule-border-radius,var(--spectrum-global-dimension-static-size-10));background-color:var(--spectrum-tabs-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([compact]) ::slotted(*){line-height:calc(var(--spectrum-tabs-quiet-compact-height,var(--spectrum-global-dimension-size-400)) - var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)));height:calc(var(--spectrum-tabs-quiet-compact-height,var(--spectrum-global-dimension-size-400)) - var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)))}:host([direction=horizontal]){align-items:center;border-bottom:var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)) solid}:host([direction=horizontal]) ::slotted(*){vertical-align:top}:host([direction=horizontal]) #selectionIndicator{position:absolute;bottom:0;height:var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick));bottom:calc(-1*var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)))}:host([direction=horizontal][compact]){box-sizing:initial;height:calc(var(--spectrum-tabs-quiet-compact-height,var(--spectrum-global-dimension-size-400)) - var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)));align-items:end}:host([quiet]){display:inline-flex;border-bottom-color:var(--spectrum-tabs-quiet-rule-color,var(--spectrum-alias-border-color-transparent))}:host([direction=vertical]){display:inline-flex;flex-direction:column;padding:0;border-left:var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)) solid;border-left-color:var(--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200))}:host([direction=vertical]) ::slotted(*){height:var(--spectrum-tabs-vertical-item-height,var(--spectrum-global-dimension-size-550));padding:0 var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100));margin-left:calc(var(--spectrum-tabs-vertical-item-margin-left,var(--spectrum-global-dimension-size-150)) - var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)));margin-bottom:var(--spectrum-tabs-vertical-item-gap,var(--spectrum-global-dimension-size-50))}:host([direction=vertical][compact]) ::slotted(*){line-height:var(--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400));margin-bottom:var(--spectrum-tabs-compact-vertical-item-gap,var(--spectrum-global-dimension-size-50));height:var(--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400))}:host([direction=vertical]) #selectionIndicator{position:absolute;left:0;width:var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick));left:calc(-1*var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)))}:host([quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([direction=vertical][compact]),:host([direction=vertical][quiet]){border-left-color:var(--spectrum-tabs-quiet-vertical-rule-color,var(--spectrum-alias-border-color-transparent))}:host([direction=vertical][compact]) #selectionIndicator,:host([direction=vertical][quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([direction=horizontal]){border-bottom-color:var(--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200))}:host([direction=horizontal]) ::slotted(sp-tab:not(:first-child)){margin-left:var(--spectrum-tabs-item-gap,var(--spectrum-global-dimension-size-300))}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}"]);return y=function(){return t},t}var z=p(y());function k(){var t=e([' <slot @click="','" @keydown="','" @slotchange="','"></slot> <div id="selectionIndicator" style="','"></div> ']);return k=function(){return t},t}var x={vertical:["ArrowUp","ArrowDown"],horizontal:["ArrowLeft","ArrowRight"]},T=function(t){function e(){var t;return r(this,e),(t=i(this,s(e).apply(this,arguments))).direction="horizontal",t.selectionIndicatorStyle="",t.value="",t._selected="",t.tabs=[],t.isListeningToKeyboard=!1,t.startListeningToKeyboard=function(){t.addEventListener("keydown",t.handleKeydown),t.isListeningToKeyboard=!0},t.stopListeningToKeyboard=function(){t.isListeningToKeyboard=!1,t.removeEventListener("keydown",t.handleKeydown)},t}return a(e,t),o(e,[{key:"manageAutoFocus",value:function(){var t=this,a=n(this.querySelectorAll('[role="tab"]')).map((function(t){return t.updateComplete}));Promise.all(a).then((function(){return l(s(e.prototype),"manageAutoFocus",t).call(t)}))}},{key:"render",value:function(){return c(k(),this.onClick,this.onKeyDown,this.onSlotChange,this.selectionIndicatorStyle)}},{key:"firstUpdated",value:function(t){l(s(e.prototype),"firstUpdated",this).call(this,t),this.setAttribute("role","tablist"),this.addEventListener("focusin",this.startListeningToKeyboard),this.addEventListener("focusout",this.stopListeningToKeyboard)}},{key:"updated",value:function(t){l(s(e.prototype),"updated",this).call(this,t),t.has("direction")&&("vertical"===this.direction?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}},{key:"handleKeydown",value:function(t){var e=t.code,a=x[this.direction];if(a.includes(e)){t.preventDefault();var r=g(this),i=this.tabs.indexOf(r);i+=e===a[0]?-1:1,this.tabs[(i+this.tabs.length)%this.tabs.length].focus()}}},{key:"onClick",value:function(t){var e=t.target;this.selectTarget(e),this.isListeningToKeyboard&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),e.focus())}},{key:"onKeyDown",value:function(t){if("Enter"===t.key||" "===t.key){t.preventDefault();var e=t.target;e&&this.selectTarget(e)}}},{key:"selectTarget",value:function(t){var e=t.getAttribute("value");if(e){var a=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=a)}}},{key:"onSlotChange",value:function(){this.updateCheckedState(this.selected),this.tabs=n(this.querySelectorAll('[role="tab"]'))}},{key:"updateCheckedState",value:function(t){if(this.querySelectorAll("[selected]").forEach((function(t){t.removeAttribute("selected")})),t.length){var e=this.querySelector('[value="'.concat(t,'"]'));e?e.setAttribute("selected",""):this.selected=""}if(!this.selected){var a=this.querySelector('[role="tab"]');a&&a.setAttribute("tabindex","0")}this.updateSelectionIndicator()}},{key:"updateSelectionIndicator",value:function(){var t,e,a,r,i,s,o,n;return regeneratorRuntime.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=this.querySelector("[selected]")){l.next=3;break}return l.abrupt("return");case 3:return l.next=5,regeneratorRuntime.awrap(t.updateComplete);case 5:e=t.getBoundingClientRect(),"horizontal"===this.direction?(a=e.width,r=this.getBoundingClientRect().left,i=e.left-r,this.selectionIndicatorStyle="width: ".concat(a,"px; transform: translateX(").concat(i,"px)")):(s=e.height,o=this.getBoundingClientRect().top,n=e.top-o,this.selectionIndicatorStyle="height: ".concat(s,"px; transform: translateY(").concat(n,"px)"));case 7:case"end":return l.stop()}}),null,this)}},{key:"selected",get:function(){return this._selected},set:function(t){var e=this.selected;t!==e&&(this.updateCheckedState(t),this._selected=t,this.requestUpdate("selected",e))}},{key:"focusElement",get:function(){return this.querySelector('[tabindex="0"]')||this.querySelector("sp-tab")}}],[{key:"styles",get:function(){return[z]}}]),e}(m);function w(){var t=e([':host{position:relative;box-sizing:border-box;height:calc(var(--spectrum-tabs-height,var(--spectrum-global-dimension-size-600)) - var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)));line-height:calc(var(--spectrum-tabs-height,var(--spectrum-global-dimension-size-600)) - var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)));z-index:1;text-decoration:none;white-space:nowrap;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;cursor:pointer;outline:0;color:var(--spectrum-tabs-text-color,var(--spectrum-alias-label-text-color))}:host([disabled]),:host([disabled]) #itemLabel{cursor:default}::slotted([slot=icon]){height:calc(var(--spectrum-tabs-height,var(--spectrum-global-dimension-size-600)) - var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick)));color:var(--spectrum-tabs-icon-color,var(--spectrum-alias-icon-color))}slot[name=icon]+#itemLabel{margin-left:calc(var(--spectrum-tabs-icon-gap,var(--spectrum-global-dimension-size-100)) - var(--spectrum-global-dimension-size-40))}:host:before{content:"";position:absolute;top:50%;box-sizing:border-box;height:var(--spectrum-tabs-focus-ring-height,var(--spectrum-alias-single-line-height));margin-top:calc(var(--spectrum-tabs-focus-ring-height,var(--spectrum-alias-single-line-height))/ -2 + var(--spectrum-tabs-rule-height,var(--spectrum-alias-border-size-thick))/ 2);left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)));right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)));border:var(--spectrum-tabs-focus-ring-size,var(--spectrum-alias-border-size-thick)) solid transparent;border-radius:var(--spectrum-tabs-focus-ring-border-radius);pointer-events:none}#itemLabel{cursor:pointer;vertical-align:top;display:inline-block;font-size:var(--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default));font-weight:var(--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight))}#itemLabel:empty{display:none}:host(:hover){color:var(--spectrum-tabs-text-color-hover,var(--spectrum-alias-text-color-hover))}:host(:hover) ::slotted([slot=icon]){color:var(--spectrum-tabs-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host([selected]){color:var(--spectrum-tabs-text-color-selected,var(--spectrum-global-color-gray-900))}:host([selected]) ::slotted([slot=icon]){color:var(--spectrum-tabs-icon-color-selected,var(--spectrum-global-color-gray-900))}:host(.focus-visible){color:var(--spectrum-tabs-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host(.focus-visible):before{border-color:var(--spectrum-tabs-focus-ring-color,var(--spectrum-alias-border-color-focus))}:host(.focus-visible) ::slotted([slot=icon]){color:var(--spectrum-tabs-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host([disabled]){color:var(--spectrum-tabs-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host([disabled]) ::slotted([slot=icon]){color:var(--spectrum-tabs-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host([vertical]){display:flex;flex-direction:column;justify-content:center;align-items:center;height:auto}:host([vertical]):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size,2px));right:calc(-1*var(--spectrum-tabs-focus-ring-size,2px));height:auto;margin-top:0;top:0;bottom:0}:host([vertical]) ::slotted([slot=icon]){flex-shrink:0}:host([vertical]) #itemLabel{font-size:13px;padding:8px 0;font-weight:400;line-height:1;margin:0}']);return w=function(){return t},t}h([d({reflect:!0})],T.prototype,"direction",void 0),h([d()],T.prototype,"selectionIndicatorStyle",void 0),h([d({type:String,reflect:!0})],T.prototype,"value",void 0),h([d({reflect:!0})],T.prototype,"selected",null),customElements.get("sp-tab-list")||customElements.define("sp-tab-list",T);var S=p(w());function q(){var t=e([""]);return q=function(){return t},t}function C(){var t=e([' <slot name="icon"></slot> ']);return C=function(){return t},t}function I(){var t=e([" ",' <label id="itemLabel"> '," </label> "]);return I=function(){return t},t}var A=function(t){function e(){var t;return r(this,e),(t=i(this,s(e).apply(this,arguments))).label="",t.selected=!1,t.vertical=!1,t.value="",t}return a(e,t),o(e,[{key:"render",value:function(){return c(I(),this.hasIcon?c(C()):c(q()),this.label)}},{key:"firstUpdated",value:function(){this.setAttribute("role","tab")}},{key:"updated",value:function(t){t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1"))}},{key:"hasIcon",get:function(){return!!this.querySelector('[slot="icon"]')}}],[{key:"styles",get:function(){return[S]}}]),e}(f(v));function L(){var t=e(['\n        <sp-tab-list selected="1" quiet compact direction="','">\n            <sp-tab label="Tab 1" value="1"></sp-tab>\n            <sp-tab label="Tab 2" value="2"></sp-tab>\n            <sp-tab label="Tab 3" value="3"></sp-tab>\n            <sp-tab label="Tab 4" value="4"></sp-tab>\n        </sp-tab-list>\n    ']);return L=function(){return t},t}function E(){var t=e(['\n        <sp-tab-list selected="1" compact direction="','">\n            <sp-tab label="Tab 1" value="1"></sp-tab>\n            <sp-tab label="Tab 2" value="2"></sp-tab>\n            <sp-tab label="Tab 3" value="3"></sp-tab>\n            <sp-tab label="Tab 4" value="4"></sp-tab>\n        </sp-tab-list>\n    ']);return E=function(){return t},t}function K(){var t=e(['\n        <sp-tab-list selected="1" quiet direction="','">\n            <sp-tab label="Tab 1" value="1"></sp-tab>\n            <sp-tab label="Tab 2" value="2"></sp-tab>\n            <sp-tab label="Tab 3" value="3"></sp-tab>\n            <sp-tab label="Tab 4" value="4"></sp-tab>\n        </sp-tab-list>\n    ']);return K=function(){return t},t}function j(){var t=e(['\n        <sp-icons-medium></sp-icons-medium>\n        <sp-tab-list selected="1" direction="vertical">\n            <sp-tab label="Tab 1" value="1" vertical>\n                <sp-icon\n                    slot="icon"\n                    size="s"\n                    name="ui:CheckmarkSmall"\n                ></sp-icon>\n            </sp-tab>\n            <sp-tab label="Tab 2" value="2" vertical>\n                <sp-icon slot="icon" size="s" name="ui:CrossSmall"></sp-icon>\n            </sp-tab>\n            <sp-tab label="Tab 3" value="3" vertical>\n                <sp-icon\n                    slot="icon"\n                    size="s"\n                    name="ui:ChevronDownSmall"\n                ></sp-icon>\n            </sp-tab>\n            <sp-tab label="Tab 4" value="4" vertical>\n                <sp-icon slot="icon" size="s" name="ui:HelpSmall"></sp-icon>\n            </sp-tab>\n        </sp-tab-list>\n    ']);return j=function(){return t},t}function D(){var t=e(['\n        <sp-icons-medium></sp-icons-medium>\n        <sp-tab-list selected="1" direction="','">\n            <sp-tab\n                label="Tab 1"\n                value="1"\n                ?vertical=','\n            >\n                <sp-icon\n                    slot="icon"\n                    size="s"\n                    name="ui:CheckmarkSmall"\n                ></sp-icon>\n            </sp-tab>\n            <sp-tab\n                label="Tab 2"\n                value="2"\n                ?vertical=','\n            >\n                <sp-icon slot="icon" size="s" name="ui:CrossSmall"></sp-icon>\n            </sp-tab>\n            <sp-tab\n                label="Tab 3"\n                value="3"\n                ?vertical=','\n            >\n                <sp-icon\n                    slot="icon"\n                    size="s"\n                    name="ui:ChevronDownSmall"\n                ></sp-icon>\n            </sp-tab>\n            <sp-tab\n                label="Tab 4"\n                value="4"\n                ?vertical=','\n            >\n                <sp-icon slot="icon" size="s" name="ui:HelpSmall"></sp-icon>\n            </sp-tab>\n        </sp-tab-list>\n    ']);return D=function(){return t},t}function R(){var t=e(['\n        <sp-tab-list selected="1" direction="vertical">\n            <sp-tab label="Tab 1" value="1"></sp-tab>\n            <sp-tab label="Tab 2" value="2"></sp-tab>\n            <sp-tab label="Tab 3" value="3"></sp-tab>\n            <sp-tab label="Tab 4" value="4"></sp-tab>\n        </sp-tab-list>\n    ']);return R=function(){return t},t}function _(){var t=e(['\n        <sp-tab-list selected="1" autofocus>\n            <sp-tab label="Tab 1" value="1"></sp-tab>\n            <sp-tab label="Tab 2" value="2"></sp-tab>\n            <sp-tab label="Tab 3" value="3"></sp-tab>\n            <sp-tab label="Tab 4" value="4"></sp-tab>\n        </sp-tab-list>\n    ']);return _=function(){return t},t}function B(){var t=e(['\n        <sp-tab-list selected="1">\n            <sp-tab label="Tab 1" value="1"></sp-tab>\n            <sp-tab label="Tab 2" value="2"></sp-tab>\n            <sp-tab label="Tab 3" value="3"></sp-tab>\n            <sp-tab label="Tab 4" value="4"></sp-tab>\n        </sp-tab-list>\n    ']);return B=function(){return t},t}h([d({reflect:!0})],A.prototype,"label",void 0),h([d({type:Boolean,reflect:!0})],A.prototype,"selected",void 0),h([d({type:Boolean,reflect:!0})],A.prototype,"vertical",void 0),h([d({type:String,reflect:!0})],A.prototype,"value",void 0),customElements.get("sp-tab")||customElements.define("sp-tab",A);t("default",{component:"sp-tab-list",title:"Tabs"}),t("Default",(function(){return u(B())})),t("Autofocus",(function(){return u(_())})),t("Vertical",(function(){return u(R())})),t("Icons",(function(){var t={horizontal:"horizontal",vertical:"vertical"},e=b("List Type",t,t.horizontal),a=b("Tab Type",t,t.horizontal);return u(D(),e,a===t.vertical,a===t.vertical,a===t.vertical,a===t.vertical)}));t("iconsIi",(function(){return u(j())})).story={name:"Icons II"};t("Quiet",(function(){var t={horizontal:"horizontal",vertical:"vertical"},e=b("Type",t,t.horizontal);return u(K(),e)})),t("Compact",(function(){var t={horizontal:"horizontal",vertical:"vertical"},e=b("Type",t,t.horizontal);return u(E(),e)}));t("quietCompact",(function(){var t={horizontal:"horizontal",vertical:"vertical"},e=b("Type",t,t.horizontal);return u(L(),e)})).story={name:"Quiet Compact"};t("__namedExportsOrder",["Default","Autofocus","Vertical","Icons","iconsIi","Quiet","Compact","quietCompact"])}}}));
//# sourceMappingURL=tabs.stories-9f07a48b.js.map
