// store function that grabs html of unit number to rewrite

let unitEl = document.getElementById("unit-el")
let metersInitial = document.getElementById("meters-initial")
let feetsInitial = document.getElementById("feets-initial")
let gallonsInitial = document.getElementById("gallons-initial")
let littersInitial = document.getElementById("litters-initial")
let kilosInitial = document.getElementById("kilos-initial")
let poundsInitial = document.getElementById("pounds-initial")

let metersFinal = document.getElementById("meters-final")
let feetsFinal = document.getElementById("feets-final")
let gallonsFinal = document.getElementById("gallons-final")
let littersFinal = document.getElementById("litters-final")
let kilosFinal = document.getElementById("kilos-final")
let poundsFinal = document.getElementById("pounds-final")

unitEl.addEventListener("input", convertionsResult)

function convertionsResult() {
    let unitNum = Number(unitEl.value)
    
    metersInitial.textContent = unitNum
    feetsFinal.textContent = (unitNum * 3.28084).toFixed(3)

    feetsInitial.textContent = unitNum
    metersFinal.textContent = (unitNum * 0.3048).toFixed(3)

    littersInitial.textContent = unitNum
    gallonsFinal.textContent = (unitNum * 0.2641722).toFixed(3)

    gallonsInitial.textContent = unitNum
    littersFinal.textContent = (unitNum * 3.785411784).toFixed(3)

    kilosInitial.textContent = unitNum
    poundsFinal.textContent = (unitNum * 2.20462).toFixed(3)

    poundsInitial.textContent = unitNum
    kilosFinal.textContent = (unitNum * 0.453592).toFixed(3)
}