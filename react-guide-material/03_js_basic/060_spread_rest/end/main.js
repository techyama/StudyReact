// POINT スプレッド演算子の使い方
const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// 配列を全て展開できる
const result = Math.max(...nums);
console.log(result);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// 複数の配列から新しい配列を作成できる
let newArr = [...arr1, 10, ...arr2 ];
let newArr1 = arr1;
console.log(newArr);

const obj = {
  name: "Tom",
  age: 22,
};
// 元のオブジェクトに影響しない新しいオブジェクトを作成できる
const newObj = { ...obj };
newObj.name = 'John';

console.log(newObj, obj);

// 引数の個数が決まっていなくても処理できる(レストパラメーター)
const restA = (...argA) => console.log(argA);
restA(1, 3)

// 別の変数に分けたいものだけ別で宣言できる
const restB = (n, ...argB) => console.log(argB);
// n = 1, argB = [3, 4]
restB(1, 3, 4)
