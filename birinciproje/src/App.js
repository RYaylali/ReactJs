import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "RAMAZAN";
  const students = 42;
  const dogruMu = false;
  return (
    <>
      <h2>İsim Soyisim : {name}</h2>
      <p>{students}</p>
      {dogruMu ? <p>Ramzan</p> : <p>YAYLALI</p>}
    </>
  );
}
export default App;
