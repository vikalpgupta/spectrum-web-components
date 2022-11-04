---
layout: partial.njk
title: 'Toast: Spectrum Web Components'
displayName: Toast
componentName: toast
componentHeading: sp-toast
partType: api
tags:
- toast
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

<tr class="spectrum-Table-row" id="attributes and properties_timeout" data-name="Property" data-value="timeout">

<td class="spectrum-Table-cell">
<code>timeout</code>
</td>

<td class="spectrum-Table-cell">
<code>timeout</code>
</td>

<td class="spectrum-Table-cell">
<code>number | null</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
When a timeout is provided it represents the number of milliseconds from when
the Toast was placed on the page before it will automatically dismiss itself.
Accessibility concerns require that a Toast is available for at least 6000ms
before being dismissed, so any timeout of less than 6000ms will be raised to
that baseline. It is suggested that messages longer than 120 words should
receive another 1000ms in their timeout for each additional 120 words in the
message. E.G. 240 words = 7000ms, 360 words = 8000ms, etc.
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
<code>ToastVariants</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
The variant applies specific styling when set to `negative`, `positive`, `info`, `error`, or `warning`.
`variant` attribute is removed when not matching one of the above.
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
The toast content
</td>

</tr>

<tr class="spectrum-Table-row" id="slots_action" data-name="Slot name" data-value="action">

<td class="spectrum-Table-cell">
<code>action</code>
</td>

<td class="spectrum-Table-cell">
button element surfacing an action in the Toast
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
<code>CustomEvent</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces that the Toast has been closed by the user or by its timeout.</code>
</td>

</tr>

</tbody>
</table>
</div>
    
