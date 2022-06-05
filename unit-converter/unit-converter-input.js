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

// stores the unit number base for all convertions

unitEl.addEventListener("input", metersToFeets)
unitEl.addEventListener("input", feetsToMeters)
unitEl.addEventListener("input", littersToGallons)
unitEl.addEventListener("input", gallonsToLitters)
unitEl.addEventListener("input", kilosToPounds)
unitEl.addEventListener("input", poundsToKilos)

function metersToFeets() {
    metersInitial.textContent = Number(unitEl.value)
    feetsFinal.textContent = Number(unitEl.value) * 3.28084
}

function feetsToMeters() {
    feetsInitial.textContent = Number(unitEl.value)
    metersFinal.textContent = Number(unitEl.value) * 0.3048
}

function littersToGallons() {
    littersInitial.textContent = Number(unitEl.value)
    gallonsFinal.textContent = Number(unitEl.value) * 0.2641722
}

function gallonsToLitters() {
    gallonsInitial.textContent = Number(unitEl.value)
    littersFinal.textContent = Number(unitEl.value) * 3.785411784
}

function kilosToPounds() {
    kilosInitial.textContent = Number(unitEl.value)
    poundsFinal.textContent = Number(unitEl.value) * 2.20462
}

function poundsToKilos() {
    poundsInitial.textContent = Number(unitEl.value)
    kilosFinal.textContent = Number(unitEl.value) * 0.453592
}