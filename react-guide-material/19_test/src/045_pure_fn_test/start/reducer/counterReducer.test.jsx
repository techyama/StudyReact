// Reducerのテスト
import { counterReducer } from "./counterReducer"; 

const initState = { count: 0, step: 1 }
describe('counterReducerの動作確認', () => {
    test('upの挙動', () => {
        const newState = counterReducer(initState, {
            type: 'up'
        });

        // オブジェクトのプロパティと指定した値が等しいか
        expect(newState).toEqual({ count: 1, step: 1 });
        // プリミティブ型の値と指定した値が等しいか
        expect(newState.count).toBe(1);
    });

    test('downの挙動', () => {
        const newState = counterReducer(initState, {
            type: 'down'
        });

        // オブジェクトのプロパティと指定した値が等しいか
        expect(newState).toEqual({ count: -1, step: 1 });
    });
    
    test('downの挙動', () => {
        const newState = counterReducer(initState, {
            type: 'down'
        });

        // オブジェクトのプロパティと指定した値が等しいか
        expect(newState).toEqual({ count: -1, step: 1 });
        // プリミティブ型の値と指定した値が等しいか
        expect(newState.count).toBe(-1);
    });

    // test('clearの挙動', () => {
    //     const newState = counterReducer(initState, {
    //         type: 'up'
    //     });

    //     // オブジェクトのプロパティと指定した値が等しいか
    //     expect(newState).toEqual({ count: 1, step: 1 });
    // });
    
    // test('changeStepの挙動', () => {
    //     const newState = counterReducer(initState, {
    //         type: 'up'
    //     });

    //     // オブジェクトのプロパティと指定した値が等しいか
    //     expect(newState).toEqual({ count: 1, step: 1 });
    // });
});
