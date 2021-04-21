const tempCalc = () => {
  const tempNumber = document.getElementById("temp").value;
  const selectedOption_1 = document.getElementById("tempOption_1");
  const selectedValue_1 =
    selectedOption_1.options[selectedOption_1.selectedIndex].value;
  const selectedOption_2 = document.getElementById("tempOption_2");
  const selectedValue_2 =
    selectedOption_2.options[selectedOption_2.selectedIndex].value;
// formula
  const celToFah = (cel) => {
    let Fahrenheit = ((cel * 9) / 5 + 32).toFixed(2);
    return Fahrenheit;
  };
  const celToKel = (cel) => {
    let Kelvin = cel + 273.15;
    return Kelvin;
  };
  const fahToCel = (fah) => {
    let Celsius = (((fah - 32) * 5) / 9).toFixed(2);
    return Celsius;
  };
  const fahToKel = (fah) => {
    let Kelvin = (((fah - 32) * 5) / 9 + 273.15).toFixed(2);
    return Kelvin;
  };
  const kelToCel = (kel) => {
    let Celsius = (kel - 273.15).toFixed(2);
    return Celsius;
  };
  const kelToFah = (kel) => {
    let Fahrenheit = (((kel - 273.15) * 9) / 5 + 32).toFixed(2);
    return Fahrenheit;
  };
  const celToCel = (cel) => {
    let Celsius = cel;
    return Celsius;
  };
  const fahToFah = (fah) => {
    let Fahrenheit = fah;
    return Fahrenheit;
  };
  const kelToKel = (kel) => {
    let Kelvin = kel;
    return Kelvin;
  };
// end formula
  let result;
  if (selectedValue_1 == "default_1" || selectedValue_2 == "default_2") {
    alert("Select valid option");
  } else if (selectedValue_1 == "cel_1" && selectedValue_2 == "fah_2") {
    result = celToFah(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Fahrenheit</span>`;
  } else if (selectedValue_1 == "cel_1" && selectedValue_2 == "kel_2") {
    result = celToKel(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Kelvin</span>`;
  } else if (selectedValue_1 == "fah_1" && selectedValue_2 == "cel_2") {
    result = fahToCel(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Celsius</span>`;
  } else if (selectedValue_1 == "fah_1" && selectedValue_2 == "kel_2") {
    result = fahToKel(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Kelvin</span>`;
  } else if (selectedValue_1 == "kel_1" && selectedValue_2 == "cel_2") {
    result = kelToCel(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Celsius</span>`;
  } else if (selectedValue_1 == "kel_1" && selectedValue_2 == "fah_2") {
    result = kelToFah(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Fahrenheit</span>`;
  } else if (selectedValue_1 == "cel_1" && selectedValue_2 == "cel_2") {
    result = celToCel(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Celsius</span>`;
  } else if (selectedValue_1 == "fah_1" && selectedValue_2 == "fah_2") {
    result = fahToFah(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Fahrenheit</span>`;
  } else {
    result = kelToKel(tempNumber);
    let resultContainer = document.getElementById("calcResult");
    resultContainer.innerHTML = `<span class="break-words break-all">= ${result}</span><span class="break-normal">°Kelvin</span>`;
  }
};
