// code here, goodluck!!

"use strict";

const prompt = require("prompt-sync")();

function getValidNumberInput(promptMessage) {
  let num;

  while (true) {
    const input1 = prompt(promptMessage);
    num = Number(input1);

    if (!isNaN(num)) {
      return num;
    }
    console.log("Harap Menggunakan angka.");
  }
}

function getValidOperatorInput(promptMessage) {
  const perhitungan = [`+`, `-`, `*`, `/`, `%`, `**`];
  let operator;

  while (true) {
    operator = prompt(promptMessage);
    if (perhitungan.includes(operator)) {
      return operator;
    }
    console.log(
      "Masukkan hitungan yang tersedia dr `+`, `-`, `*`, `/`, `%`, `**`"
    );
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error Division By Zero!";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function calculation(a, b, operator) {
  let result;

  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    case "%":
      result = modulo(a, b);
      break;
    case "**":
      result = power(a, b);
      break;
  }
  return result;
}

function analyzeResult(result) {
  if (typeof result === "number") {
    console.log("hasilnya adalah :", result);
    let tipe = typeof result;
    console.log("ini adalah tipe ", tipe);
    if (result > 0) {
      console.log("bilangan positiv");
    } else if (result < 0) {
      console.log("bilangan negatif");
    } else {
      console.log("zero");
    }

    if (Number.isInteger(result)) {
      console.log(",bilangan bulat juga");
    } else console.log("bilangan desimal");

    console.log(result % 2 === 0 ? "genap" : "ganjil");
  } else if (result === "string") {
    console.log("Error: Division by zero!");
  } else
    console.log(
      result ?? `"Result is undefined or null, something went wrong!"`
    );

  if (result % 2 === 0 && Number.isInteger(result)) {
    console.log("Wow Angka Bulat dan genap :V");
  } else if (result % 2 === 0 || Number.isInteger(result)) {
    console.log("<.< Keknya ada yang bulat atau yang genap deh >.>");
  } else if (result === "Error Division By Zero!") {
    console.log("Bro... jangan maksa napa -_-");
  } else console.log("Desimal dan ganjil.... genji ?");
}
while (true) {
  console.log("===> Simple Calculator by Merdi <===");

  let Angka1 = getValidNumberInput("Masukan angka: ");

  let angka2 = getValidNumberInput("Masukan angka kedua: ");

  let operator = getValidOperatorInput(
    "Masukan operator (`+`, `-`, `*`, `/`, `%`, `**`): "
  );

  while (angka2 === 0 && operator === "/") {
    let yakin = prompt(
      "Hasilnya akan error apakah yakin ingin dilanjutkan? (y/n): "
    );

    if (yakin === "y") {
      break;
    } else {
      let operator = getValidOperatorInput(
        "masukan lagi operator (`+`, `-`, `*`, `/`, `%`, `**`): "
      );
    }
  }

  let result = calculation(Angka1, angka2, operator);

  analyzeResult(result);

  let another = prompt("apakah ingin menggunakan calculator lagi? (yes/no): ");
  if (another === "no" || another === "n") {
    console.log("terima kasihh datang lagi yaaa");
    break;
  }
}
