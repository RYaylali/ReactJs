import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Team</Link>
        {"İç içe tanımlanan routerlarda içeridekinin to kısmına slah konulmaz"}
      </nav>
      <Outlet />
    </>
  );
}
