const onClickAdd = () => {
  //テキストボックスのエレメントを取得
  const textEl = document.getElementById("add-text");

  //テキストボックスの値を取得
  const text = textEl.value;
  textEl.value = "";

  //タグの生成
  //<p></p>
  const p = document.createElement("p");
  //<p>text</p>
  p.textContent = text;

  //<ul></ul>
  const li = document.createElement("li");
  //<div></div>
  const div = document.createElement("div");

  //<button></button>
  const button = document.createElement("button");
  //<button>削除</button>
  button.textContent = "削除";

  //削除ボタンを押した時の処理
  button.addEventListener("click", () => {
    //一致する親要素を探索
    const deleteTarget = button.closest("li");

    //上記の要素を子要素から除去する
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  //<div>
  //    <p>text</p>
  //</div>

  div.appendChild(button);
  //<div>
  //    <p>text</p>
  //    <button>削除</button>
  //</div>
  li.appendChild(div);
  //<li>
  //    <div>
  //        <p>text</p>
  //        <button>削除</button>
  //    </div>
  //</li>

  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
