import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/*
要素取得に使う関数の優先順位
1.getByRole
2.getByLabelText
3.getByPlaceholderText
4.getByText
5.getByDisplayValue
6.querySelector
*/

test('要素の中身が存在するか', () => {
    // 要素の中身を表示する関数とコンポーネントの中身を取得
    const { debug, container } = render(<Greet />);
    // ロールから一番最初の要素を取得
    const radioEl = screen.getByRole('radio');
    // テスト実行時に引数の要素の中身をログに表示
    debug(radioEl);
    // レンダリングしたコンポーネントの中身をログに表示
    screen.debug();
    expect(radioEl).toBeInTheDocument();

    // 全ての要素
    const imgEl = screen.getByRole('img');
    debug(imgEl);

    // 要素の値を指定して取得
    const headingEl = screen.getByRole('heading', { name: 'こんにちは' });
    debug(headingEl);
    // querySelectorで取得
    const h2El = container.querySelector('h2');
    debug(h2El);

    // labelで紐づく要素を取得
    const ElByLabel = screen.getByLabelText('氏名');
    debug(ElByLabel);

    // placeholerで取得
    const ElByPlaceholder = screen.getByPlaceholderText('氏名');
    debug(ElByPlaceholder);
})