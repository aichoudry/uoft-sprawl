import React from "react";
import "../../../../styles/components/Tables.css";

function TermSelection({ terms, setTerm, currentTerm }) {
  terms.sort();
  if (isNaN(Number(terms[0][0]))) {
    terms.sort((a, b) => {
      if (a.split(" ")[1] > b.split(" ")[1]) {
        return 1;
      } else if (a.split(" ")[1] < b.split(" ")[1]) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div className="terms">
      <ul>
        <li
          className={currentTerm === "" ? "emphasis" : null}
          onClick={() => setTerm("")}
        >
          Hide
        </li>
        {terms.map((term) => (
          <li
            className={currentTerm === term ? "emphasis" : null}
            onClick={() => setTerm(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TermSelection;
