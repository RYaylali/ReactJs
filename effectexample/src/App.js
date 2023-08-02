import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [ramazan, setRamazan] = useState(0);
  const [yaylali, setYaylalı] = useState(0); //useeffect component çağırıldığında verilerin silinmeden tutulmasını sağlar
  useEffect(() => {
    console.log("Component ilk defa çağırıldığında çalışır");
  }, []); //Component ilk defa çağırıldığında çalışır
  useEffect(() => {
    console.log(
      "component ilk defa çağırıldığında ve değişilik olduğunda çalışır"
    );
  }); //component ilk defa .aağırıldığında ve değişilik olduğunda çalışır
  useEffect(() => {
    console.log(
      "Component ilk defa çağırıldığında ve ramazan  değişince çalışır"
    );
  }, [ramazan]); //Component ilk defa çağırıldığında ve ramazan  değişince çalışır

  return (
    <div className="App">
      <div>
        <button onClick={() => setRamazan(ramazan + 1)}>Ramazan ++</button>
        <div>Ramazan : {ramazan}</div>
      </div>
      <div>
        <button onClick={() => setYaylalı(yaylali + 1)}>Yaylalı ++</button>
        <div>Yaylalı : {yaylali}</div>
      </div>
    </div>
  );
}

export default App;
