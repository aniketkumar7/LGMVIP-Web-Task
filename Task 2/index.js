const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const result = document.querySelector("#result");
const evaluation = document.querySelector("#eval");
const rm = document.querySelector(".ac");
const del = document.querySelector(".del");

rm.addEventListener("click", function () {
  result.value = "";
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function () {
    result.value += this.value;
  };
}

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = function () {
    result.value += this.value;
  };
}

evaluation.addEventListener("click", function () {
  let valor = eval(result.value);
  return (result.value = valor);
});

del.addEventListener("click", function () {
  result.value = result.value.slice(0, -1);
});
