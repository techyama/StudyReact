import { useState, createContext } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  const [ state, setState ] = useState(0);
  return (
    // 囲んだコンポーネントでvalueの値を使えるようになる
    <MyContext.Provider value={[ state, setState ]}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
