import React, { useEffect } from "react";

export default function Navbar({ setCampus }) {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          UOFT <span className="emphasis">SPRAWL</span>
        </a>
      </div>
      <div className="campus">
        <a href="#" onClick={() => setCampus("UTSG")}>
          UTSG
        </a>
        <a href="#" onClick={() => setCampus("UTM")}>
          UTM
        </a>
        <a href="#" onClick={() => setCampus("UTSC")}>
          UTSC
        </a>
      </div>
    </nav>
  );
}
