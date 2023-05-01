const inputUnit = document.getElementById('inputUnit')
const outputUnit = document.getElementById('outputUnit')
const inputValue = document.getElementById('inputValue')
const outputValue = document.getElementById('outputValue')

inputValue.addEventListener('keyup', convertMeasurement)
inputUnit.addEventListener('change', convertMeasurement)
outputUnit.addEventListener('change', convertMeasurement)

function convertMeasurement() {

    let inputChosenUnit = inputUnit.value
    let outputChosenUnit = outputUnit.value
    let inputTypedValue = inputValue.value
    let operand1
    let operand2

    if (inputTypedValue.includes(',')) {
        operand1 = Number(inputTypedValue.replace(",", "."))
    } else {
        operand1 = Number(inputTypedValue)
    }

    if (inputChosenUnit == outputChosenUnit) {
        operand2 = operand1
    } // Conversion from degrees Celsius:
    else if (inputChosenUnit == 'ce') {
        if (outputChosenUnit == 'fh') {
            operand2 = (operand1 * (9 / 5)) + 32
        }
        else if (outputChosenUnit == 'ke') {
            operand2 = operand1 + 273.15
        }
    } // Conversion from degrees Fahrenheit:
    else if (inputChosenUnit == 'fh') {
        if (outputChosenUnit == 'ce') {
            operand2 = (operand1 - 32) * (5 / 9)
        }
        else if (outputChosenUnit == 'ke') {
            operand2 = ((operand1 - 32) * (5 / 9)) + 273.15
        }
    } // Conversion from Kelvin:
    else if (inputChosenUnit == 'ke') {
        if (outputChosenUnit == 'ce') {
            operand2 = operand1 - 273.15
        }
        else if (outputChosenUnit == 'fh') {
            operand2 = ((operand1 - 273.15) * (9 / 5)) + 32
        }
    }

    operand2 = operand2.toString()

    if (inputTypedValue.includes(',')) {
        outputValue.value = operand2.replace(".", ",")
    } else {
        outputValue.value = operand2
    }

}
