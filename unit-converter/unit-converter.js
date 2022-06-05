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
let unitNumber = 11

function metersToFeets() {
    let feets = unitNumber * 3
    feetsFinal.textContent = feets
}

function feetsToMeters() {
    let meters = unitNumber * 4
    metersFinal.textContent = meters
}

function littersToGallons() {
    let gallons = unitNumber * 5
    gallonsFinal.textContent = gallons
}

function gallonsToLitters() {
    let litters = unitNumber * 6
    littersFinal.textContent = litters
}

function kilosToPounds() {
    let pounds = unitNumber * 7
    poundsFinal.textContent = pounds
}

function poundsToKilos() {
    let kilos = unitNumber * 8
    kilosFinal.textContent = kilos
}

unitEl.textContent = unitNumber
metersInitial.textContent = unitNumber
feetsInitial.textContent = unitNumber
littersInitial.textContent = unitNumber
gallonsInitial.textContent = unitNumber
poundsInitial.textContent = unitNumber
kilosInitial.textContent = unitNumber

metersToFeets()
feetsToMeters()
littersToGallons()
gallonsToLitters()
kilosToPounds()
poundsToKilos()