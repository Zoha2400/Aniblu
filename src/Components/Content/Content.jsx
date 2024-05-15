import { useState, useEffect } from "react";
import "./Content.scss";
import Home from "./Home/Home";

function Content() {
  return (
    <div className="Content-wrapper container-wrapper w-full overflow-hidden mt-5">
      <div className="Content">
        <Home />
      </div>
    </div>
  );
}

export default Content;
