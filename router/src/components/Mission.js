import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      {/* <button onClick={() => navigate("/")}>MGeriye dön</button> B u şekilde home gidebilir vey alttaki gibi -1 yazarakda gidebilir.*/}
      <button onClick={() => navigate(-1)}>Geriye dön</button>
    </>
  );
}
