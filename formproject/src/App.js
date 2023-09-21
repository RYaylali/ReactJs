import "./App.css";
import { Route, Routes } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";
//dom yup formik
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;
