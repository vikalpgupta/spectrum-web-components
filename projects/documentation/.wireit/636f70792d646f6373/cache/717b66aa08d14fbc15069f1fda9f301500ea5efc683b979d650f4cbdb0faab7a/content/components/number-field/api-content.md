---
layout: partial.njk
title: 'Number Field: Spectrum Web Components'
displayName: Number Field
componentName: number-field
componentHeading: sp-number-field
partType: api
tags:
- number-field
---

### Attributes and Properties

<div class="table-container">
<table class="spectrum-Table spectrum-Table--sizeM">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Property
</th>

<th class="spectrum-Table-headCell">
Attribute
</th>

<th class="spectrum-Table-headCell">
Type
</th>

<th class="spectrum-Table-headCell">
Default
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row" id="attributes and properties_allowed-keys" data-name="Property" data-value="allowedKeys">

<td class="spectrum-Table-cell">
<code>allowedKeys</code>
</td>

<td class="spectrum-Table-cell">
<code>allowed-keys</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>''</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_autocomplete" data-name="Property" data-value="autocomplete">

<td class="spectrum-Table-cell">
<code>autocomplete</code>
</td>

<td class="spectrum-Table-cell">
<code>autocomplete</code>
</td>

<td class="spectrum-Table-cell">
<code>| HTMLInputElement['autocomplete']
        | HTMLTextAreaElement['autocomplete'] | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_focused" data-name="Property" data-value="focused">

<td class="spectrum-Table-cell">
<code>focused</code>
</td>

<td class="spectrum-Table-cell">
<code>focused</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_format-options" data-name="Property" data-value="formatOptions">

<td class="spectrum-Table-cell">
<code>formatOptions</code>
</td>

<td class="spectrum-Table-cell">
<code>format-options</code>
</td>

<td class="spectrum-Table-cell">
<code>Intl.NumberFormatOptions</code>
</td>

<td class="spectrum-Table-cell">
<code>{}</code>
</td>

<td class="spectrum-Table-cell">
An `&lt;sp-number-field&gt;` element will process its numeric value with
`new Intl.NumberFormat(this.resolvedLanguage, this.formatOptions).format(this.valueAsNumber)`
in order to prepare it for visual delivery in the input. In order to customize this
processing supply your own `Intl.NumberFormatOptions` object here.

See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_grows" data-name="Property" data-value="grows">

<td class="spectrum-Table-cell">
<code>grows</code>
</td>

<td class="spectrum-Table-cell">
<code>grows</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_hide-stepper" data-name="Property" data-value="hideStepper">

<td class="spectrum-Table-cell">
<code>hideStepper</code>
</td>

<td class="spectrum-Table-cell">
<code>hide-stepper</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Whether the stepper UI is hidden or not.
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_indeterminate" data-name="Property" data-value="indeterminate">

<td class="spectrum-Table-cell">
<code>indeterminate</code>
</td>

<td class="spectrum-Table-cell">
<code>indeterminate</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_invalid" data-name="Property" data-value="invalid">

<td class="spectrum-Table-cell">
<code>invalid</code>
</td>

<td class="spectrum-Table-cell">
<code>invalid</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_keyboard-focused" data-name="Property" data-value="keyboardFocused">

<td class="spectrum-Table-cell">
<code>keyboardFocused</code>
</td>

<td class="spectrum-Table-cell">
<code>keyboard-focused</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_label" data-name="Property" data-value="label">

<td class="spectrum-Table-cell">
<code>label</code>
</td>

<td class="spectrum-Table-cell">
<code>label</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>''</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_max" data-name="Property" data-value="max">

<td class="spectrum-Table-cell">
<code>max</code>
</td>

<td class="spectrum-Table-cell">
<code>max</code>
</td>

<td class="spectrum-Table-cell">
<code>number | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_maxlength" data-name="Property" data-value="maxlength">

<td class="spectrum-Table-cell">
<code>maxlength</code>
</td>

<td class="spectrum-Table-cell">
<code>maxlength</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>-1</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_min" data-name="Property" data-value="min">

<td class="spectrum-Table-cell">
<code>min</code>
</td>

<td class="spectrum-Table-cell">
<code>min</code>
</td>

<td class="spectrum-Table-cell">
<code>number | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_minlength" data-name="Property" data-value="minlength">

<td class="spectrum-Table-cell">
<code>minlength</code>
</td>

<td class="spectrum-Table-cell">
<code>minlength</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>-1</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_multiline" data-name="Property" data-value="multiline">

<td class="spectrum-Table-cell">
<code>multiline</code>
</td>

<td class="spectrum-Table-cell">
<code>multiline</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_pattern" data-name="Property" data-value="pattern">

<td class="spectrum-Table-cell">
<code>pattern</code>
</td>

<td class="spectrum-Table-cell">
<code>pattern</code>
</td>

<td class="spectrum-Table-cell">
<code>string | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_placeholder" data-name="Property" data-value="placeholder">

<td class="spectrum-Table-cell">
<code>placeholder</code>
</td>

<td class="spectrum-Table-cell">
<code>placeholder</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>''</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_quiet" data-name="Property" data-value="quiet">

<td class="spectrum-Table-cell">
<code>quiet</code>
</td>

<td class="spectrum-Table-cell">
<code>quiet</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_readonly" data-name="Property" data-value="readonly">

<td class="spectrum-Table-cell">
<code>readonly</code>
</td>

<td class="spectrum-Table-cell">
<code>readonly</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_required" data-name="Property" data-value="required">

<td class="spectrum-Table-cell">
<code>required</code>
</td>

<td class="spectrum-Table-cell">
<code>required</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_step" data-name="Property" data-value="step">

<td class="spectrum-Table-cell">
<code>step</code>
</td>

<td class="spectrum-Table-cell">
<code>step</code>
</td>

<td class="spectrum-Table-cell">
<code>number | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
The distance by which to alter the value of the element when taking a "step".

When `this.formatOptions.style === 'percentage'` the default step will be
set to 0.01 unless otherwise supplied to the element.
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_step-modifier" data-name="Property" data-value="stepModifier">

<td class="spectrum-Table-cell">
<code>stepModifier</code>
</td>

<td class="spectrum-Table-cell">
<code>step-modifier</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>10</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_type" data-name="Property" data-value="_type">

<td class="spectrum-Table-cell">
<code>_type</code>
</td>

<td class="spectrum-Table-cell">
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>TextfieldType</code>
</td>

<td class="spectrum-Table-cell">
<code>'text'</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_valid" data-name="Property" data-value="valid">

<td class="spectrum-Table-cell">
<code>valid</code>
</td>

<td class="spectrum-Table-cell">
<code>valid</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_value" data-name="Property" data-value="value">

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>string | number</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

</tbody>
</table>
</div>
    

### Slots

<div class="table-container">
<table class="spectrum-Table spectrum-Table--sizeM">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row" id="slots_help-text" data-name="Slot name" data-value="help-text">

<td class="spectrum-Table-cell">
<code>help-text</code>
</td>

<td class="spectrum-Table-cell">
default or non-negative help text to associate to your form element
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_negative-help-text" data-name="Slot name" data-value="negative-help-text">

<td class="spectrum-Table-cell">
<code>negative-help-text</code>
</td>

<td class="spectrum-Table-cell">
negative help text to associate to your form element when `invalid`
</td>

</tr>

</tbody>
</table>
</div>
    

### Events

<div class="table-container">
<table class="spectrum-Table spectrum-Table--sizeM">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Type
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row" id="events_change" data-name="Event name" data-value="change">

<td class="spectrum-Table-cell">
<code>change</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>An alteration to the value of the element has been committed by the user.</code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_input" data-name="Event name" data-value="input">

<td class="spectrum-Table-cell">
<code>input</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>The value of the element has changed.</code>
</td>

</tr>

</tbody>
</table>
</div>
    
