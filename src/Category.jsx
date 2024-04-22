export const Category = ({ title, amount, children }) => {
  return (
    <div>
      <h3>
        {title}({amount})
      </h3>
      {children}
    </div>
  );
};
