---
layout: partial.njk
title: 'Card: Spectrum Web Components'
displayName: Card
componentName: card
componentHeading: sp-card
partType: api
tags:
- card
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

<tr class="spectrum-Table-row" id="attributes and properties_asset" data-name="Property" data-value="asset">

<td class="spectrum-Table-cell">
<code>asset</code>
</td>

<td class="spectrum-Table-cell">
<code>asset</code>
</td>

<td class="spectrum-Table-cell">
<code>'file' | 'folder' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

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

<tr class="spectrum-Table-row" id="attributes and properties_heading" data-name="Property" data-value="heading">

<td class="spectrum-Table-cell">
<code>heading</code>
</td>

<td class="spectrum-Table-cell">
<code>heading</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_horizontal" data-name="Property" data-value="horizontal">

<td class="spectrum-Table-cell">
<code>horizontal</code>
</td>

<td class="spectrum-Table-cell">
<code>horizontal</code>
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
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_subheading" data-name="Property" data-value="subheading">

<td class="spectrum-Table-cell">
<code>subheading</code>
</td>

<td class="spectrum-Table-cell">
<code>subheading</code>
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
<code>''</code>
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
<code>'standard' | 'gallery' | 'quiet'</code>
</td>

<td class="spectrum-Table-cell">
<code>'standard'</code>
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

<tr class="spectrum-Table-row" id="slots_actions" data-name="Slot name" data-value="actions">

<td class="spectrum-Table-cell">
<code>actions</code>
</td>

<td class="spectrum-Table-cell">
an `sp-action-menu` element outlining actions to take on the represened object
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_cover-photo" data-name="Slot name" data-value="cover-photo">

<td class="spectrum-Table-cell">
<code>cover-photo</code>
</td>

<td class="spectrum-Table-cell">
This is the cover photo for Default and Quiet Cards
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_description" data-name="Slot name" data-value="description">

<td class="spectrum-Table-cell">
<code>description</code>
</td>

<td class="spectrum-Table-cell">
A description of the card
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_footer" data-name="Slot name" data-value="footer">

<td class="spectrum-Table-cell">
<code>footer</code>
</td>

<td class="spectrum-Table-cell">
Footer text
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_heading" data-name="Slot name" data-value="heading">

<td class="spectrum-Table-cell">
<code>heading</code>
</td>

<td class="spectrum-Table-cell">
HTML content to be listed as the heading
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_preview" data-name="Slot name" data-value="preview">

<td class="spectrum-Table-cell">
<code>preview</code>
</td>

<td class="spectrum-Table-cell">
This is the preview image for Gallery Cards
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_subheading" data-name="Slot name" data-value="subheading">

<td class="spectrum-Table-cell">
<code>subheading</code>
</td>

<td class="spectrum-Table-cell">
HTML content to be listed as the subheading
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
<code>Announces a change in the `selected` property of a card</code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_click" data-name="Event name" data-value="click">

<td class="spectrum-Table-cell">
<code>click</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

</tr>

</tbody>
</table>
</div>
    
