on("sheet:opened", () => {
    console.log("sheetworker opened")
})

on('change:repeating_somefield:trig', eventinfo => {
    // save the eventinfo in an attribute to show to the user 
    console.log(eventinfo)
    setAttrs({ sheetworker: JSON.stringify(eventinfo) })

})

on('clicked:repeating_somefield:showaction', eventinfo => {
    console.log(eventinfo)
    startRoll("&{template:embdeddedButtonTemplate} {{embeddedButton=[Embedded Button](~embeddedroll)}}", (roll) => {
        finishRoll(roll.rollId, {})
        setAttrs({ onchange: JSON.stringify(eventinfo) })
    })


})