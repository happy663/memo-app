const Memo = (props) => {
  return (
    <>
      <li>
        <p>{props.memoText}</p>
        {/* //追記 */}
        <button onClick={props.removeMemo}>削除</button>
      </li>
    </>
  );
};

export default Memo;
