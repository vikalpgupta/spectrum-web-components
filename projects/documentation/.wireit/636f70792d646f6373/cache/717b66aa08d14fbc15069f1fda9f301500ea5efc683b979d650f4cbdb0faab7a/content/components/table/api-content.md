---
layout: partial.njk
title: 'Table: Spectrum Web Components'
displayName: Table
componentName: table
componentHeading: sp-table
partType: api
tags:
- table
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

<tr class="spectrum-Table-row" id="attributes and properties_itemValue" data-name="Property" data-value="itemValue">

<td class="spectrum-Table-cell">
<code>itemValue</code>
</td>

<td class="spectrum-Table-cell">
<code>itemValue</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
The value of an item. By default, it is set to the index of the sp-table-row.
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_items" data-name="Property" data-value="items">

<td class="spectrum-Table-cell">
<code>items</code>
</td>

<td class="spectrum-Table-cell">
<code>items</code>
</td>

<td class="spectrum-Table-cell">
<code>Record&lt;string, unknown&gt;[]</code>
</td>

<td class="spectrum-Table-cell">
<code>[]</code>
</td>

<td class="spectrum-Table-cell">
The content of the rows rendered by the virtualized table. The key is the value of the sp-table-row, and the value is the sp-table-row's content (not the row itself).
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
<code>'grid'</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_scroller" data-name="Property" data-value="scroller">

<td class="spectrum-Table-cell">
<code>scroller</code>
</td>

<td class="spectrum-Table-cell">
<code>scroller</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Whether or not the virtualized table has a scroll bar. If this is set to true, make sure to specify a height in the sp-table's inline styles.
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
<code>string[]</code>
</td>

<td class="spectrum-Table-cell">
<code>[]</code>
</td>

<td class="spectrum-Table-cell">
An array of <sp-row> values that have been selected.
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_selects" data-name="Property" data-value="selects">

<td class="spectrum-Table-cell">
<code>selects</code>
</td>

<td class="spectrum-Table-cell">
<code>selects</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined | 'single' | 'multiple'</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
Whether the Table allows users to select a row or rows, and thus controls whether or not the Table also renders checkboxes.
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
<code>Announces a change in the `selected` property of a table row</code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_undefined" data-name="Event name" data-value="undefined">

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

<td class="spectrum-Table-cell">
<code>RangeChangedEvent</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

</tr>

<tr class="spectrum-Table-row" id="events_rangeChanged" data-name="Event name" data-value="rangeChanged">

<td class="spectrum-Table-cell">
<code>rangeChanged</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces a change in the range of visible cells on the table body</code>
</td>

</tr>

</tbody>
</table>
</div>
    
