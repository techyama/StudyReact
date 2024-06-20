import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// テストを実行するための関数
// 第一引数はテスト実行時に表示するメッセージ
// 第二引数はテストの中身
test('h1が存在するかどうか', () => {
    // 引数のコンポーネントをレンダリング
    render(<Greet />);
    // 引数の文字列を含む要素を取得
    const h1El = screen.getByText('こんにちは');
    // ドキュメントツリーの中に存在するかどうか
    expect(h1El).toBeInTheDocument();
})

// it関数でも可
// it('h1が存在するかどうか', () => {
//     // 引数のコンポーネントをレンダリング
//     render(<Greet />);
//     // 引数の文字列を含む要素を取得
//     const h1El = screen.getByText('こんにちは');
//     // ドキュメントツリーの中に存在するかどうか
//     expect(h1El).toBeInTheDocument();
// })
