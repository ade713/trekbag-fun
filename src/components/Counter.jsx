export function Counter({ totalNumberChecked, totalNumber }) {
  return (
    <p>
      <b>{totalNumberChecked}</b> / {totalNumber} items packed
    </p>
  );
}
