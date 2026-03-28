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
    </div>
  );
}
