import "./Child.css";
import { List } from "./List";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

// 名前付きエクスポート
export default Child;
