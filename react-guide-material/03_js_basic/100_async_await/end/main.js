// POINT 非同期処理（await/async）
let a = 0;

init();
// awaitを使用する場合必ずasyncで宣言する必要がある
async function init() {
    try {
        // awaitで宣言された行の実行が終わるまで次の行を実行しない
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
        // awaitが無い場合この文が先に実行され0が出力される
            console.log(result);
    } catch(e) {
        console.log('catchが実行', e)
    }
    
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })
    
}

