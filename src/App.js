import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide,reset } from './actions';
import CustomAlert from './components/CustomAlert';
import './App.css';

function App() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [operand1, setOperand1] = React.useState('');
  const [operand2, setOperand2] = React.useState('');
  
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();

  const handleOperand1Change = event => {
    setOperand1(event.target.value);
  };

  const handleOperand2Change = event => {
    setOperand2(event.target.value);
  };

  const handleAdd = () => {
    if (operand1 && operand2) {
      dispatch(add(parseFloat(operand1), parseFloat(operand2)));
      setOperand1('');
      setOperand2('');
    }
    else{
      // alert('plz give two operand of right type');
      setShowAlert(true);
    }
  };

  const handleSubtract = () => {
    if (operand1 && operand2) {
      dispatch(subtract(parseFloat(operand1), parseFloat(operand2)));
      setOperand1('');
      setOperand2('');
    }
    else{
      // alert('plz give two operand of right type');
      setShowAlert(true);
    }
  };

  const handleMultiply = () => {
    if (operand1 && operand2) {
      dispatch(multiply(parseFloat(operand1), parseFloat(operand2)));
      setOperand1('');
      setOperand2('');
    }
    else{
      // alert('plz give two operand of right type');
      setShowAlert(true);
    }
  };

  const handleDivide = () => {
    if (operand1 && operand2) {
      dispatch(divide(parseFloat(operand1), parseFloat(operand2)));
      setOperand1('');
      setOperand2('');
    }
    else{
      // alert('plz give two operand of right type');
      setShowAlert(true);
    }
  };

  const clearResult=()=>{
    dispatch(reset())
  }
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="calculator-container">
      <h1>Redux Calculator</h1>
      {/*  */}
      {showAlert && (
        <CustomAlert
          message="Please provide two operands of the right type."
          onClose={handleCloseAlert}
        />
      )}
      {/* ========= */}
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter Operand 1"
          value={operand1}
          onChange={handleOperand1Change}
          />
        <input
          type="number"
          placeholder="Enter Operand 2"
          value={operand2}
          onChange={handleOperand2Change}
          />
      </div>
          {result !== null && (
            <h2 className="result">Result: {result.toFixed(2)}</h2>
          )}
          <button onClick={clearResult}>Clear</button>
      <div className="buttons-container">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
    </div>
  );
}

export default App;
