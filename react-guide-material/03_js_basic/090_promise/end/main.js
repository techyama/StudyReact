// POINT 非同期処理（Promise）
let a = 0;

// 非同期処理が終わった後に特定の処理を使いたいとき
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        // この関数の実行が終わった後にthenで続く処理を行う
        resolve(a);
        // この関数の実行が終わった後にcatchで続く処理を行う
        reject(a);
    }, 2000);
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    console.log(b);
}).catch((c) => {
    console.log('catchが実行', c)
})

