var INTERVAL = 1000 // ms

var longArrow, shortArrow

function main () {
  longArrow = document.querySelector("#longArrow")
  shortArrow = document.querySelector("#shortArrow")
  loop()
}

function loop() {

  var now = new Date()

  var hours = now.getHours()
  var minutes = now.getMinutes()

  var longArrowDeg = minutes / 60 * 360
  var shortArrowDeg = (hours % 12 * 60 + minutes) / (12 * 60) * 360

  longArrow.style.transform = "rotate(" + longArrowDeg + "deg)"
  shortArrow.style.transform = "rotate(" + shortArrowDeg + "deg)"

  setTimeout(loop, INTERVAL)
}

window.addEventListener('load', main)
