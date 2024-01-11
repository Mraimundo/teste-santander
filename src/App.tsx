import { AppProvider } from "./contexts";
import { TaxaSelic } from "./pages/TaxaSelic";
import "./styles/global.css";
function App() {
  return (
    <AppProvider>
      <TaxaSelic />
    </AppProvider>
  );
}

export default App;
