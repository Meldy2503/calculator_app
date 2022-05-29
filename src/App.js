import CalculatorLayout from "./components/CalculatorLayout/CalculatorLayout";
import "./App.css";
import { calcProvider } from "./calcContext";

function App() {
  return (
    <calcProvider>
      <CalculatorLayout />
    </calcProvider>
  );
}

export default App;
