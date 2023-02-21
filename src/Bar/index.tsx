function Bar({ value }: { value: Number }) {
  return (
    <div role="progressbar">
      <span>{value.toString()}%</span>
    </div>
  );
}

export default Bar;
