import "./App.css";
import React, { useState } from "react";
import Memo from "./Memo";

function App() {
  const [memoTextList, setmemoTextList] = useState([]);
  const [memoText, setMemoText] = useState("");
  const addClick = () => {
    setmemoTextList([...memoTextList, memoText]);
    setMemoText("");
  };

  //追記
  const removeMemo = (index) => {
    const newMemoTextList = [...memoTextList];
    newMemoTextList.splice(index, 1);
    setmemoTextList(newMemoTextList);
  };

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input
        type="text"
        onChange={(e) => setMemoText(e.target.value)}
        value={memoText}
      />
      <button onClick={addClick}>追加</button>
      <div>
        <p>メモ一覧</p>
        <ul>
          {memoTextList.map((memoText, index) => {
            return (
              <Memo
                memoText={memoText}
                key={index}
                //追記
                removeMemo={() => {
                  removeMemo(index);
                }}
              ></Memo>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
