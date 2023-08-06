import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div>Sayı = {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>
        Artırır
      </button>
      <button onClick={() => numberContext.dispatch("decrement")}>
        Azaltır
      </button>
      <button onClick={() => numberContext.dispatch("reset")}>Sıfırlar</button>
    </>
  );
}

export default Calculate;
