import { useWords } from "../hooks";

const Grid = ({ columns = 1, rows = 1 }) => {
  const { words, loading, error } = useWords({ amount: 10 });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 50px)`,
        gridTemplateRows: `repeat(${rows}, 50px)`,
      }}
    >
      {Array.from({ length: columns * rows }, (_, i) => i).map((i) => (
        <div
          key={`cell-${i}`}
          className="flex justify-center items-center border border-slate-600"
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Grid;
