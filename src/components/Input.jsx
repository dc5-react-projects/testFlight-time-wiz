export default function Input({ lable, type, value, setValue }) {
  function handleChange(e) {
    const val = e.target.value;
    if (type === "number") {
      setValue(val === "" ? "" : Number(val));
    } else {
      setValue(val);
    }
  }
  return (
    <div className="input-container">
      {/* <div className="input-wrapper"> */}
      <label className="input-label" htmlFor="start-date">
        {lable}
      </label>
      <input
        className="input"
        type={type}
        id="start-date"
        value={value}
        onChange={handleChange}
      ></input>
      {/* <input type="number" min="1" max="10" step="1" value="1"></input> */}
      {/* </div> */}
    </div>
  );
}
