function Bar({ value }: { value: Number }) {
  const maxLimitNumber = (number: Number) =>
    number > 0 ? (number < 100 ? number : 100) : 0;

  return (
    <div>
      <div
        role="progressbar"
        style={{
          backgroundColor: value > 100 ? "red" : "blue",
          width: maxLimitNumber(value).toString() + "%",
        }}
      />
      <span role="label">{value.toString()}%</span>
    </div>
  );
}

export default Bar;
