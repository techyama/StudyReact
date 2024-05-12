import "./Container.css";

const Container = ({ title, children }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Container;
