import React, { useState } from "react";
import './Calculator.css' 
function Calculator() {
  const [number, setNumber] = useState(0);// Use state for number
  const [number1, setNumber1] = useState(0); // Use state for number1
  const [number2, setNumber2] = useState(0); // Use state for number2
  const [operation, setOperation] = useState(null); // Use state for operation
  const [x, setX] = useState(0); // Use state for x
  const [num1arr, setNum1arr] = useState([]); // Use state for num1arr
  const [num2arr, setNum2arr] = useState([]); // Use state for num2arr

  const getByDisplayValue = (n) => {

    if (x === 0 || x === 1) {
      num1arr.push(n);
      setX(1);
      setNumber1(Number(num1arr.join("")));
      setNumber(Number(num1arr.join("")));
    } else if (x === 2) {
      num2arr.push(n);
      setNumber2(Number(num2arr.join("")));
      setNumber(Number(num2arr.join("")));
    }
  };

  const getByoperator = (op) => {
    setX(2);
    setOperation(op);
  };

  const handleOnClear = () => {
    setNumber(0);
    setNumber1(0);
    setNumber2(0);
    setOperation(null);
    setX(0);
    setNum1arr([]);
    setNum2arr([]);
  }
  const Calculate = () => {
    if (operation === "+") {
      setNumber(number1 + number2);
    } else if (operation === "-") {
      setNumber(number1 - number2);
    } else if (operation === "*") {
      setNumber(number1 * number2);
    } else if (operation === "/") {
      setNumber(number1 / number2);
    }
  };

  return (
    <>
      <div className="Calculator">
        <h2>Calculator</h2>
        <div className="input">
          <input type="text" placeholder={number} className="display " />
        </div>
        <div className="row">
          <button onClick={() => getByDisplayValue("1")}>1</button>
          <button onClick={() => getByDisplayValue("2")}>2</button>
          <button onClick={() => getByDisplayValue("3")}>3</button>
          <button className="c" onClick={() => getByoperator("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => getByDisplayValue("4")}>4</button>
          <button onClick={() => getByDisplayValue("5")}>5</button>
          <button onClick={() => getByDisplayValue("6")}>6</button>
          <button className="c" onClick={() => getByoperator("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => getByDisplayValue("7")}>7</button>
          <button onClick={() => getByDisplayValue("8")}>8</button>
          <button onClick={() => getByDisplayValue("9")}>9</button>
          <button className="c" onClick={() => getByoperator("/")}>/</button>
        </div>
        <div className="row">
          <button className="b" onClick={() => handleOnClear()}>C</button>
          <button className="b"  onClick={() => getByoperator("*")}>*</button>
          <button onClick={() => getByDisplayValue("0")}>0</button>
          <button className="b"  onClick={() => Calculate()}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
