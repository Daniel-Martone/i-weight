document.getElementById('weight').oninput = changeWeight

function changeWeight() {
    var earthWeight = document.getElementById('weight').value
    earthWeight = Number(earthWeight)

    // MOON
    var moonWeight = (earthWeight / 6.048088716268373).toFixed(2)
    var outputMoon = document.getElementById('moonWeight')
    outputMoon.innerText = moonWeight

    // SUN
    let sunWeight = (earthWeight * 27.072).toFixed(2)
    let outputSun = document.getElementById('sunWeight')
    outputSun.innerText = sunWeight

    // MARS
    let marsWeight = (earthWeight / 2.652519893899204).toFixed(2)
    let outputMars = document.getElementById('marsWeight')
    outputMars.innerText = marsWeight

    // PLUTO
    let plutoWeight = (earthWeight / 14.92537313432836).toFixed(2)
    let outputPluto = document.getElementById('plutoWeight')
    outputPluto.innerText = plutoWeight

    // JUPITER
    let jupiterWeight = (earthWeight * 2.528).toFixed(2)
    let outputJupiter = document.getElementById('jupiterWeight')
    outputJupiter.innerText = jupiterWeight

    // WHITE DWARF
    let whiteDwarfWeight = (earthWeight * 1300000).toFixed(2)
    let outputWhiteDwarf = document.getElementById('whiteDwarfWeight')
    outputWhiteDwarf.innerText = whiteDwarfWeight
}
