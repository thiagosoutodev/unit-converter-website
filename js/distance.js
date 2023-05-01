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
    } // Conversion from milimeters:
    else if (inputChosenUnit == 'mm') {
        if (outputChosenUnit == 'cm') {
            operand2 = operand1 / 10
        }
        else if (outputChosenUnit == 'me') {
            operand2 = operand1 / (10 ** 3)
        }
        else if (outputChosenUnit == 'km') {
            operand2 = operand1 / (10 ** 6)
        }
        else if (outputChosenUnit == 'in') {
            operand2 = operand1 / 25.4
        }
        else if (outputChosenUnit == 'ly') {
            operand2 = operand1 / 9.461e+18
        }
    } // Conversion from centimeters:
    else if (inputChosenUnit == 'cm') {
        if (outputChosenUnit == 'mm') {
            operand2 = operand1 * 10
        }
        else if (outputChosenUnit == 'me') {
            operand2 = operand1 / (10 ** 2)
        }
        else if (outputChosenUnit == 'km') {
            operand2 = operand1 / (10 ** 5)
        }
        else if (outputChosenUnit == 'in') {
            operand2 = operand1 / 0.393701
        }
        else if (outputChosenUnit == 'ly') {
            operand2 = operand1 / 9.461e+17
        }
    } // Conversion from meters:
    else if (inputChosenUnit == 'me') {
        if (outputChosenUnit == 'mm') {
            operand2 = operand1 * (10 ** 3)
        }
        else if (outputChosenUnit == 'cm') {
            operand2 = operand1 * (10 ** 2)
        }
        else if (outputChosenUnit == 'km') {
            operand2 = operand1 / (10 ** 3)
        }
        else if (outputChosenUnit == 'in') {
            operand2 = operand1 * 39.37
        }
        else if (outputChosenUnit == 'ly') {
            operand2 = operand1 / 9.461e+15
        }
    } // Conversion from kilometers:
    else if (inputChosenUnit == 'km') {
        if (outputChosenUnit == 'mm') {
            operand2 = operand1 * (10 ** 6)
        }
        else if (outputChosenUnit == 'cm') {
            operand2 = operand1 * (10 ** 5)
        }
        else if (outputChosenUnit == 'me') {
            operand2 = operand1 * (10 ** 3)
        }
        else if (outputChosenUnit == 'in') {
            operand2 = operand1 * 39370
        }
        else if (outputChosenUnit == 'ly') {
            operand2 = operand1 / 9.461e+12
        }
    } // Conversion from inches:
    else if (inputChosenUnit == 'in') {
        if (outputChosenUnit == 'mm') {
            operand2 = operand1 * 25.4
        }
        else if (outputChosenUnit == 'cm') {
            operand2 = operand1 / 2.54
        }
        else if (outputChosenUnit == 'me') {
            operand2 = operand1 / 39.37
        }
        else if (outputChosenUnit == 'km') {
            operand2 = operand1 / 39370
        }
        else if (outputChosenUnit == 'ly') {
            operand2 = operand1 / 3.725e+17
        }
    } // Conversion from light-years:
    else if (inputChosenUnit == 'ly') {
        if (outputChosenUnit == 'mm') {
            operand2 = operand1 * 9, 461e+18
        }
        else if (outputChosenUnit == 'cm') {
            operand2 = operand1 * 9, 461e+17
        }
        else if (outputChosenUnit == 'me') {
            operand2 = operand1 * 9.461e+15
        }
        else if (outputChosenUnit == 'km') {
            operand2 = operand1 * 9.461e+12
        }
        else if (outputChosenUnit == 'in') {
            operand2 = operand1 / 3.725e+17
        }
    }

    operand2 = operand2.toString()

    if (inputTypedValue.includes(',')) {
        outputValue.value = operand2.replace(".", ",")
    } else {
        outputValue.value = operand2
    }

}
