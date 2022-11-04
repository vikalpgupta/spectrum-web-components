---
layout: partial.njk
title: 'Menu Item: Spectrum Web Components'
displayName: Menu Item
componentName: menu-item
componentHeading: sp-menu-item
partType: api
tags:
- menu-item
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

<tr class="spectrum-Table-row" id="attributes and properties_hasSubmenu" data-name="Property" data-value="hasSubmenu">

<td class="spectrum-Table-cell">
<code>hasSubmenu</code>
</td>

<td class="spectrum-Table-cell">
<code>hasSubmenu</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_no-wrap" data-name="Property" data-value="noWrap">

<td class="spectrum-Table-cell">
<code>noWrap</code>
</td>

<td class="spectrum-Table-cell">
<code>no-wrap</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_open" data-name="Property" data-value="open">

<td class="spectrum-Table-cell">
<code>open</code>
</td>

<td class="spectrum-Table-cell">
<code>open</code>
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
text content to display within the Menu Item
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_icon" data-name="Slot name" data-value="icon">

<td class="spectrum-Table-cell">
<code>icon</code>
</td>

<td class="spectrum-Table-cell">
icon element to be placed at the start of the Menu Item
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_value" data-name="Slot name" data-value="value">

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
content placed at the end of the Menu Item like values, keyboard shortcuts, etc.
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

<tr class="spectrum-Table-row" id="events_sp-menu-item-added" data-name="Event name" data-value="sp-menu-item-added">

<td class="spectrum-Table-cell">
<code>sp-menu-item-added</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>announces the item has been added so a parent menu can take ownerships</code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_sp-menu-item-removed" data-name="Event name" data-value="sp-menu-item-removed">

<td class="spectrum-Table-cell">
<code>sp-menu-item-removed</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>announces when removed from the DOM so the parent menu can remove ownership and update selected state</code>
</td>

</tr>

</tbody>
</table>
</div>
    
