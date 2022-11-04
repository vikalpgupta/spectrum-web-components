---
layout: partial.njk
title: 'Dialog: Spectrum Web Components'
displayName: Dialog
componentName: dialog
componentHeading: sp-dialog
partType: api
tags:
- dialog
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

<tr class="spectrum-Table-row" id="attributes and properties_dismissable" data-name="Property" data-value="dismissable">

<td class="spectrum-Table-cell">
<code>dismissable</code>
</td>

<td class="spectrum-Table-cell">
<code>dismissable</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_error" data-name="Property" data-value="error">

<td class="spectrum-Table-cell">
<code>error</code>
</td>

<td class="spectrum-Table-cell">
<code>error</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_mode" data-name="Property" data-value="mode">

<td class="spectrum-Table-cell">
<code>mode</code>
</td>

<td class="spectrum-Table-cell">
<code>mode</code>
</td>

<td class="spectrum-Table-cell">
<code>'fullscreen' | 'fullscreenTakeover' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row" id="attributes and properties_no-divider" data-name="Property" data-value="noDivider">

<td class="spectrum-Table-cell">
<code>noDivider</code>
</td>

<td class="spectrum-Table-cell">
<code>no-divider</code>
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

<tr class="spectrum-Table-row" id="attributes and properties_size" data-name="Property" data-value="size">

<td class="spectrum-Table-cell">
<code>size</code>
</td>

<td class="spectrum-Table-cell">
<code>size</code>
</td>

<td class="spectrum-Table-cell">
<code>'s' | 'm' | 'l' | undefined</code>
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

<tr class="spectrum-Table-row" id="slots_button" data-name="Slot name" data-value="button">

<td class="spectrum-Table-cell">
<code>button</code>
</td>

<td class="spectrum-Table-cell">
Button elements addressed to this slot may be placed below the content when not delivered in a fullscreen mode
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_footer" data-name="Slot name" data-value="footer">

<td class="spectrum-Table-cell">
<code>footer</code>
</td>

<td class="spectrum-Table-cell">
Content addressed to the `footer` will be placed below the main content and to the side of any `[slot='button']` content
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_heading" data-name="Slot name" data-value="heading">

<td class="spectrum-Table-cell">
<code>heading</code>
</td>

<td class="spectrum-Table-cell">
Acts as the heading of the dialog. This should be an actual heading tag `<h1-6 />`
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_hero" data-name="Slot name" data-value="hero">

<td class="spectrum-Table-cell">
<code>hero</code>
</td>

<td class="spectrum-Table-cell">
Accepts a hero image to display at the top of the dialog
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_" data-name="Slot name" data-value="default slot">

<td class="spectrum-Table-cell">
<code>default slot</code>
</td>

<td class="spectrum-Table-cell">
Content not addressed to a specific slot will be interpreted as the main content of the dialog
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

<tr class="spectrum-Table-row" id="events_close" data-name="Event name" data-value="close">

<td class="spectrum-Table-cell">
<code>close</code>
</td>

<td class="spectrum-Table-cell">
<code>Event</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces that the dialog has been closed.</code>
</td>

</tr>

</tbody>
</table>
</div>
    
