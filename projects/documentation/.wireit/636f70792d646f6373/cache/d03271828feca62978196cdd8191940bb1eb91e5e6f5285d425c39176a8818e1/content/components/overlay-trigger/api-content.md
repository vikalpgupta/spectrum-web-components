---
layout: partial.njk
title: 'Overlay Trigger: Spectrum Web Components'
displayName: Overlay Trigger
componentName: overlay-trigger
componentHeading: overlay-trigger
partType: api
tags:
- overlay-trigger
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

<tr class="spectrum-Table-row" id="attributes and properties_dir" data-name="Property" data-value="dir">

<td class="spectrum-Table-cell">
<code>dir</code>
</td>

<td class="spectrum-Table-cell">
<code>dir</code>
</td>

<td class="spectrum-Table-cell">
<code>'ltr' | 'rtl'</code>
</td>

<td class="spectrum-Table-cell">
<code>'ltr'</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

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

<tr class="spectrum-Table-row" id="attributes and properties_offset" data-name="Property" data-value="offset">

<td class="spectrum-Table-cell">
<code>offset</code>
</td>

<td class="spectrum-Table-cell">
<code>offset</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>6</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_open" data-name="Property" data-value="open">

<td class="spectrum-Table-cell">
<code>open</code>
</td>

<td class="spectrum-Table-cell">
<code>open</code>
</td>

<td class="spectrum-Table-cell">
<code>OverlayContentTypes | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_placement" data-name="Property" data-value="placement">

<td class="spectrum-Table-cell">
<code>placement</code>
</td>

<td class="spectrum-Table-cell">
<code>placement</code>
</td>

<td class="spectrum-Table-cell">
<code>"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"</code>
</td>

<td class="spectrum-Table-cell">
<code>'bottom'</code>
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
<code>OverlayTriggerInteractions | undefined</code>
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

<tr class="spectrum-Table-row" id="slots_click-content" data-name="Slot name" data-value="click-content">

<td class="spectrum-Table-cell">
<code>click-content</code>
</td>

<td class="spectrum-Table-cell">
The content that will be displayed on click
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_hover-content" data-name="Slot name" data-value="hover-content">

<td class="spectrum-Table-cell">
<code>hover-content</code>
</td>

<td class="spectrum-Table-cell">
The content that will be displayed on hover
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_longpress-content" data-name="Slot name" data-value="longpress-content">

<td class="spectrum-Table-cell">
<code>longpress-content</code>
</td>

<td class="spectrum-Table-cell">
The content that will be displayed on click
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_trigger" data-name="Slot name" data-value="trigger">

<td class="spectrum-Table-cell">
<code>trigger</code>
</td>

<td class="spectrum-Table-cell">
The content that will trigger the various overlays
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

<tr class="spectrum-Table-row" id="events_sp-closed" data-name="Event name" data-value="sp-closed">

<td class="spectrum-Table-cell">
<code>sp-closed</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces that the overlay has been closed</code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_sp-opened" data-name="Event name" data-value="sp-opened">

<td class="spectrum-Table-cell">
<code>sp-opened</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces that the overlay has been opened</code>
</td>

</tr>

</tbody>
</table>
</div>
    
