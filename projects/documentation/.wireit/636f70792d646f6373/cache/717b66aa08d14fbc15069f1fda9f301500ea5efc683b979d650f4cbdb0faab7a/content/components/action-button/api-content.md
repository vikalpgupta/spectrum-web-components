---
layout: partial.njk
title: 'Action Button: Spectrum Web Components'
displayName: Action Button
componentName: action-button
componentHeading: sp-action-button
partType: api
tags:
- action-button
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

<tr class="spectrum-Table-row" id="attributes and properties_active" data-name="Property" data-value="active">

<td class="spectrum-Table-cell">
<code>active</code>
</td>

<td class="spectrum-Table-cell">
<code>active</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_emphasized" data-name="Property" data-value="emphasized">

<td class="spectrum-Table-cell">
<code>emphasized</code>
</td>

<td class="spectrum-Table-cell">
<code>emphasized</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_hold-affordance" data-name="Property" data-value="holdAffordance">

<td class="spectrum-Table-cell">
<code>holdAffordance</code>
</td>

<td class="spectrum-Table-cell">
<code>hold-affordance</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_role" data-name="Property" data-value="role">

<td class="spectrum-Table-cell">
<code>role</code>
</td>

<td class="spectrum-Table-cell">
<code>role</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>'button'</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_selected" data-name="Property" data-value="selected">

<td class="spectrum-Table-cell">
<code>selected</code>
</td>

<td class="spectrum-Table-cell">
<code>selected</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Whether an Action Button with `role='button'`
should also be `aria-pressed='true'`
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_toggles" data-name="Property" data-value="toggles">

<td class="spectrum-Table-cell">
<code>toggles</code>
</td>

<td class="spectrum-Table-cell">
<code>toggles</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Whether to automatically manage the `selected`
attribute on interaction and whether `aria-pressed="false"`
should be used when `selected === false`
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
<code>'button' | 'submit' | 'reset'</code>
</td>

<td class="spectrum-Table-cell">
<code>'button'</code>
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
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

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
<code>'white' | 'black' | undefined</code>
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
text label of the Action Button
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_icon" data-name="Slot name" data-value="icon">

<td class="spectrum-Table-cell">
<code>icon</code>
</td>

<td class="spectrum-Table-cell">
The icon to use for Action Button
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
<code>Announces a change in the `selected` property of an action button</code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_longpress" data-name="Event name" data-value="longpress">

<td class="spectrum-Table-cell">
<code>longpress</code>
</td>

<td class="spectrum-Table-cell">
<code>CustomEvent</code>
</td>

<td class="spectrum-Table-cell">
<code>Synthesizes a "longpress" interaction that signifies a `pointerdown` event that is &gt;=300ms or a keyboard event wher code is `Space` or code is `ArrowDown` while `altKey===true`.</code>
</td>

</tr>

</tbody>
</table>
</div>
    
