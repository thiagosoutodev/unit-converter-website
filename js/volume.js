const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");

inputValue.addEventListener("keyup", convertMeasurement);
inputUnit.addEventListener("change", convertMeasurement);
outputUnit.addEventListener("change", convertMeasurement);

function convertMeasurement() {
  let inputChosenUnit = inputUnit.value;
  let outputChosenUnit = outputUnit.value;
  let inputTypedValue = inputValue.value;
  let operand1;
  let operand2;

  if (inputTypedValue.includes(",")) {
    operand1 = Number(inputTypedValue.replace(",", "."));
  } else {
    operand1 = Number(inputTypedValue);
  }

  if (inputChosenUnit == outputChosenUnit) {
    operand2 = operand1;
  } // Conversion from cubic milimeters:
  else if (inputChosenUnit == "mm3") {
    if (outputChosenUnit == "cm3") {
      operand2 = operand1 / 10 ** 3;
    } else if (outputChosenUnit == "ml") {
      operand2 = operand1 / 10 ** 3;
    } else if (outputChosenUnit == "li") {
      operand2 = operand1 / 10 ** 6;
    } else if (outputChosenUnit == "floz") {
      operand2 = operand1 / 29570;
    } else if (outputChosenUnit == "gal") {
      operand2 = operand1 / 3.785e16;
    }
  } // Conversion from cubic centimeters:
  else if (inputChosenUnit == "cm3") {
    if (outputChosenUnit == "mm3") {
      operand2 = operand1 * 10 ** 3;
    } else if (outputChosenUnit == "ml") {
      operand2 = operand1 * 1;
    } else if (outputChosenUnit == "li") {
      operand2 = operand1 / 10 ** 3;
    } else if (outputChosenUnit == "floz") {
      operand2 = operand1 / 29.574;
    } else if (outputChosenUnit == "gal") {
      operand2 = operand1 / 3785;
    }
  } // Conversion from mililiters:
  else if (inputChosenUnit == "ml") {
    if (outputChosenUnit == "mm3") {
      operand2 = operand1 * 10 ** 3;
    } else if (outputChosenUnit == "cm3") {
      operand2 = operand1 * 1;
    } else if (outputChosenUnit == "li") {
      operand2 = operand1 / 10 ** 3;
    } else if (outputChosenUnit == "floz") {
      operand2 = operand1 / 29.574;
    } else if (outputChosenUnit == "gal") {
      operand2 = operand1 / 3785;
    }
  } // Conversion from liters:
  else if (inputChosenUnit == "li") {
    if (outputChosenUnit == "mm3") {
      operand2 = operand1 * 10 ** 6;
    } else if (outputChosenUnit == "cm3") {
      operand2 = operand1 * 10 ** 3;
    } else if (outputChosenUnit == "ml") {
      operand2 = operand1 * 10 ** 3;
    } else if (outputChosenUnit == "floz") {
      operand2 = operand1 * 33.814;
    } else if (outputChosenUnit == "gal") {
      operand2 = operand1 / 3.785;
    }
  } // Conversion from fluid ounces:
  else if (inputChosenUnit == "floz") {
    if (outputChosenUnit == "mm3") {
      operand2 = operand1 * 29570;
    } else if (outputChosenUnit == "cm3") {
      operand2 = operand1 * 29.574;
    } else if (outputChosenUnit == "ml") {
      operand2 = operand1 * 29.574;
    } else if (outputChosenUnit == "li") {
      operand2 = operand1 / 33.814;
    } else if (outputChosenUnit == "gal") {
      operand2 = operand1 / 128;
    }
  } // Conversion from gallons:
  else if (inputChosenUnit == "gal") {
    if (outputChosenUnit == "mm3") {
      operand2 = operand1 * 3.785e6;
    } else if (outputChosenUnit == "cm3") {
      operand2 = operand1 * 3785;
    } else if (outputChosenUnit == "ml") {
      operand2 = operand1 * 3785;
    } else if (outputChosenUnit == "li") {
      operand2 = operand1 * 3.785;
    } else if (outputChosenUnit == "floz") {
      operand2 = operand1 * 128;
    }
  }

  operand2 = operand2.toString();

  if (inputTypedValue.includes(",")) {
    outputValue.value = operand2.replace(".", ",");
  } else {
    outputValue.value = operand2;
  }
}
