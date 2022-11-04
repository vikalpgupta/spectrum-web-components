---
layout: partial.njk
title: 'Slider: Spectrum Web Components'
displayName: Slider
componentName: slider
componentHeading: sp-slider
partType: api
tags:
- slider
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

<tr class="spectrum-Table-row" id="attributes and properties_disabled" data-name="Property" data-value="disabled">

<td class="spectrum-Table-cell">
<code>disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>disabled</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_dragging" data-name="Property" data-value="dragging">

<td class="spectrum-Table-cell">
<code>dragging</code>
</td>

<td class="spectrum-Table-cell">
<code>dragging</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_editable" data-name="Property" data-value="editable">

<td class="spectrum-Table-cell">
<code>editable</code>
</td>

<td class="spectrum-Table-cell">
<code>editable</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
Whether to display a Number Field along side the slider UI
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
<code>NumberFormatOptions | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
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
Whether the stepper UI of the Number Field is hidden or not
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_highlight" data-name="Property" data-value="highlight">

<td class="spectrum-Table-cell">
<code>highlight</code>
</td>

<td class="spectrum-Table-cell">
<code>highlight</code>
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
Applies `indeterminate` to the underlying `sp-number-field` when `editable === true`. Is removed on the next `change` event.
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

<tr class="spectrum-Table-row" id="attributes and properties_label-visibility" data-name="Property" data-value="labelVisibility">

<td class="spectrum-Table-cell">
<code>labelVisibility</code>
</td>

<td class="spectrum-Table-cell">
<code>label-visibility</code>
</td>

<td class="spectrum-Table-cell">
<code>'text' | 'value' | 'none' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
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
<code>number | 'next' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code>100</code>
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
<code>number | 'previous' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code>0</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_name" data-name="Property" data-value="name">

<td class="spectrum-Table-cell">
<code>name</code>
</td>

<td class="spectrum-Table-cell">
<code>name</code>
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
Applies `quiet` to the underlying `sp-number-field` when `editable === true`.
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
<code>1</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_tick-labels" data-name="Property" data-value="tickLabels">

<td class="spectrum-Table-cell">
<code>tickLabels</code>
</td>

<td class="spectrum-Table-cell">
<code>tick-labels</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_tick-step" data-name="Property" data-value="tickStep">

<td class="spectrum-Table-cell">
<code>tickStep</code>
</td>

<td class="spectrum-Table-cell">
<code>tick-step</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>0</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_type" data-name="Property" data-value="type">

<td class="spectrum-Table-cell">
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>type</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_value" data-name="Property" data-value="value">

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
By default, the value of a Slider Handle will be halfway between its
`min` and `max` values, or the `min` value when `max` is less than `min`.
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_variant" data-name="Property" data-value="variant">

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
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

<tr class="spectrum-Table-row" id="slots_" data-name="Slot name" data-value="default slot">

<td class="spectrum-Table-cell">
<code>default slot</code>
</td>

<td class="spectrum-Table-cell">
text label for the Slider
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_handle" data-name="Slot name" data-value="handle">

<td class="spectrum-Table-cell">
<code>handle</code>
</td>

<td class="spectrum-Table-cell">
optionally accepts two or more sp-slider-handle elements
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

<tr class="spectrum-Table-row" id="events_sp-slider-handle-ready" data-name="Event name" data-value="sp-slider-handle-ready">

<td class="spectrum-Table-cell">
<code>sp-slider-handle-ready</code>
</td>

<td class="spectrum-Table-cell">
<code>CustomEvent</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

</tr>

</tbody>
</table>
</div>
    
