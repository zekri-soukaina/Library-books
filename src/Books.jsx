export const Books = ({ amount, children }) => {
  return (
    <div>
      <h2>Books ({amount})</h2>
      {children}
    </div>
  );
};
