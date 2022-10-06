import CalculatorLayout from "./components/CalculatorLayout/CalculatorLayout";
import "./App.css";
import { CalcProvider } from "./CalcContext";

function App() {
  return (
    <CalcProvider>
      <CalculatorLayout />
    </CalcProvider>
  );
}

export default App;
