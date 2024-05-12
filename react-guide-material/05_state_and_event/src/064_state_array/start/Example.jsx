import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  // 末尾の数値を取り出して先頭に配置する関数
  const shuffle = () => {
    const newNums = [ ...nums ];
    const value = newNums.pop(); 
    newNums.unshift(value);
    
    setNums(newNums);
  }

  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
