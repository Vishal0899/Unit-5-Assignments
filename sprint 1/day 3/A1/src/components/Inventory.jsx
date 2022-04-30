import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 0,
  });
  // Create add and remove functions here that changes the
  // state.

  const handle = (item, value) => {
    if (item == "books") {
      setInv({ ...inv, books: inv.books + value });
    } else if (item == "notebooks") {
      setInv({ ...inv, notebooks: inv.notebooks + value });
    } else if (item == "pens") {
      setInv({ ...inv, pens: inv.pens + value });
    } else {
      setInv({ ...inv, inkpens: inv.inkpens + value });
    }
  };

  const total = inv.books + inv.notebooks + inv.pens + inv.inkpens;

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => handle("books", 1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handle("books", -1)}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => handle("notebooks", 1)}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => handle("notebooks", -1)}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => handle("pens", 1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handle("pens", -1)}>
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          className="circlularButton"
          onClick={() => handle("inkpens", 1)}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => handle("inkpens", -1)}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
