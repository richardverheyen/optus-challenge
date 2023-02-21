import "./index.scss";

function Bar({ value }: { value: Number }) {
  const maxLimitNumber = (number: Number) =>
    number > 0 ? (number < 100 ? number : 100) : 0;

  return (
    <div className="bar">
      <div
        role="progressbar"
        style={{
          backgroundColor: value > 100 ? "#f44336" : "#1976d2",
          width: maxLimitNumber(value).toString() + "%",
        }}
      />
      <span role="label">{value.toString()}%</span>
    </div>
  );
}

export default Bar;
