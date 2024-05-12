// POINT 配列のmap、filterメソッドの使い方
const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if(val > 50) {
    newArry.push(arry[i] * 2)
  }
}

console.log(newArry);

// 上と同じ条件(配列の要素を2倍した値が50以上のもので新しい配列を作る)
const newArry2 = arry.map(val => val * 2).filter(val => val > 50);
console.log(newArry2)