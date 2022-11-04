---
layout: partial.njk
title: 'Tabs: Spectrum Web Components'
displayName: Tabs
componentName: tabs
componentHeading: sp-tabs
partType: api
tags:
- tabs
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

<tr class="spectrum-Table-row" id="attributes and properties_auto" data-name="Property" data-value="auto">

<td class="spectrum-Table-cell">
<code>auto</code>
</td>

<td class="spectrum-Table-cell">
<code>auto</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Whether to activate a tab on keyboard focus or not.

By default a tab is activated via a "click" interaction. This is specifically intended for when
tab content cannot be displayed instantly, e.g. not all of the DOM content is available, etc.
To learn more about "Deciding When to Make Selection Automatically Follow Focus", visit:
https://w3c.github.io/aria-practices/#kbd_selection_follows_focus
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_compact" data-name="Property" data-value="compact">

<td class="spectrum-Table-cell">
<code>compact</code>
</td>

<td class="spectrum-Table-cell">
<code>compact</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
The tab items are displayed closer together.
</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_direction" data-name="Property" data-value="direction">

<td class="spectrum-Table-cell">
<code>direction</code>
</td>

<td class="spectrum-Table-cell">
<code>direction</code>
</td>

<td class="spectrum-Table-cell">
<code>'vertical' | 'vertical-right' | 'horizontal'</code>
</td>

<td class="spectrum-Table-cell">
<code>'horizontal'</code>
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
The tab list is displayed without a border.
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
Tab elements to manage as a group
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_tab-panel" data-name="Slot name" data-value="tab-panel">

<td class="spectrum-Table-cell">
<code>tab-panel</code>
</td>

<td class="spectrum-Table-cell">
Tab Panel elements related to the listed Tab elements
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
<code>The selected Tab child has changed.</code>
</td>

</tr>

</tbody>
</table>
</div>
    
