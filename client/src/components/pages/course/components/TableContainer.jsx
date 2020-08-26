// @ts-nocheck
import React, { useState } from "react";
import SectionsTable from "./SectionsTable";
import EvaluationsTable from "./EvaluationsTable";
import TermSelection from "./TermSelection";
import { v4 as uuidv4 } from "uuid";
import "../../../../styles/components/Tables.css";

function TableContainer({ sections, type }) {
  const [currentTerm, setCurrentTerm] = useState("");
  const divClass = { Sections: "timings", Evaluations: "ratings" };

  const terms = sections.map((term) => term.term);
  const termTables = {};

  terms.forEach((term) => {
    const lectures = sections.filter((sterm) => sterm.term === term)[0]
      .lectures;
    termTables[term] =
      type === "Sections" ? (
        <SectionsTable lectures={lectures} name={term} key={uuidv4()} />
      ) : (
        <EvaluationsTable lectures={lectures} />
      );
  });

  return (
    <div className={divClass[type]}>
      <h1>{type}</h1>
      <TermSelection
        terms={terms}
        setTerm={setCurrentTerm}
        currentTerm={currentTerm}
      />
      {termTables[currentTerm]}
    </div>
  );
}

export default TableContainer;
