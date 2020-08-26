// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function InputForm({ campus, float }) {
  const [input, setInput] = useState("");
  useEffect(() => {}, [campus]);
  const history = useHistory();
  return (
    <div className={"input-container" + float}>
      <form onSubmit={() => history.push(`/${campus}/course/${input}`)}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search for courses!"
        />
        <button type="submit">{campus}</button>
      </form>
    </div>
  );
}

export default InputForm;
