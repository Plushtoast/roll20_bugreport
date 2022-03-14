<p>Add bug.html as custom character sheet for bug reproduction.</p>


<h1>Bugs</h1>
<h2>#1 Action Button and Roll Button eventinfo differs (ID)</h2>
<b>Steps to reproduce:</b>
<ul>
    <li>Add repeating row (unless already done)</li>
    <li>Edit "Field to trigger sheetworker"</li>
    <li>Eventinfo Sheetworker should contain eventinfo</li>
    <li>Click action button</li>
    <li>Eventinfo Action button should contain eventinfo</li>
    <li>Compare sourceAttribute</li>
    <li>sourceAttribute differs even though same repeating row</li>
</ul>
<b>Expected behaviour</b>: IDs should be equal (both downcase or not mixed case)
<h2>#2 Embedded buttons in rolls called from action buttons don't work</h2>
<b>Steps to reproduce:</b>
<ul>
    <li>Add repeating row (unless already done)</li>
    <li>Make sure input fields contain content</li>
    <li>Click Roll button "show eventinfo"</li>
    <li>Click "click me" button in appeared chat message</li>
    <li>Embedded roll button working correctly</li>
    <li>Click action button "show eventinfo"</li>
    <li>Click "click me" button in appeared chat message</li>
    <li>Error for missing repeating section attributes shows up</li>
</ul>
<b>Expected behaviour</b>: Embedded roll buttons should work in action button rolls too