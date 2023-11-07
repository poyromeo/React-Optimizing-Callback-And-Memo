import React, { memo, useCallback, useState } from "react";
import "./App.css";
import Item from "./Item";

const BGColorMemo = memo(({ color }) => {
  console.log("BGColor rendered ", color);

  return (
    <React.Fragment>
      <div
        style={{ margin: 2, width: 100, height: 100, backgroundColor: color }}
      ></div>
    </React.Fragment>
  );
});

const SearchMemo = memo(({ onChange }) => {
  console.log("SearchMemo rendered ");
  return (
    <input
      type="text"
      name="text"
      id="text"
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

function App() {
  const [list, setList] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);

  const [color, setColor] = useState(false);

  const [users, setUsers] = useState([
    "RECEP",
    "SAMET",
    "EKREM",
    "EMRE",
    "ZEYNEP",
    "BUSE",
  ]);

  const changeValue = useCallback((id, value) => {
    setList((prevList) =>
      prevList.map((r) => {
        if (r.id == id) {
          r.value = value;
        }
        return r;
      })
    );
  }, []);

  const onChangeFilterUser = useCallback((value) => {
    const filterUser = users.filter((user) => user.includes(value));
    setUsers(filterUser);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <p>{JSON.stringify(list)}</p>
      </header>
      <div className="items">
        {list.map((r) => {
          return (
            <Item key={r.id} id={r.id} value={r.value} onChange={changeValue} />
          );
        })}
      </div>
      <div className="bg-color">
        <BGColorMemo color={color ? "blue" : "red"} />
        <button
          style={{
            width: "100%",
            border: "none",
            borderRadius: 5,
            padding: 5,
            backgroundColor: "ButtonFace",
          }}
          onClick={() =>
            setColor((prevColor) => {
              return !prevColor;
            })
          }
        >
          Change Color
        </button>
      </div>
      <hr style={{ width: "25%" }} />
      <div className="seach-users">
        <SearchMemo onChange={onChangeFilterUser} />
        <div className="user-list">
          {users.map((user) => {
            return <li>{user}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
