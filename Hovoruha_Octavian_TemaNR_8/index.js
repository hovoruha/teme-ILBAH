const App = document.getElementById("app");
const output = document.getElementById("output");

const formTVA = document.getElementById("calculTVA");
const inputsTVA = formTVA.querySelectorAll("input");
const btnCalculareTVA = inputsTVA[2];

btnCalculareTVA.addEventListener("click", getTVA);

function getTVA(e) {
  e.preventDefault();

  const output = document.getElementById("outputTVA");
  const valDeCalc = Number(inputsTVA[0].value);
  const valTVA = Number(inputsTVA[1].value);
  const tvaCalculat = valDeCalc * (valTVA / 100);

  output.innerHTML = tvaCalculat + " RON";
}

const formTemp = document.getElementById("calculTemp");
const inputsTemp = formTemp.querySelectorAll("input");
const btnCalculareTemp = inputsTemp[2];

btnCalculareTemp.addEventListener("click", getTemp);

function getTemp(e) {
  e.preventDefault();

  const output = document.getElementById("outputTemp");
  const tempInCelsius = Number(inputsTemp[0].value);
  //   console.log(tempInCelsius);
  const fahrenheitIndex = Number(inputsTemp[1].value);
  //   console.log(fahrenheitIndex);
  const calculatedTemp = (tempInCelsius + 40) * fahrenheitIndex - 40;
  //   console.log(calculatedTemp);

  output.innerHTML = calculatedTemp + " deg. Fahrenheit";
}
