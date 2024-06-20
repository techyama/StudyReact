import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
test('カウントアップボタンを押して+1されるか', () => {
    // Arrage
    render(<Counter originCount={0} />);

    // 更新前
    const spanElBefore = screen.getByText('現在のカウント:0');
    expect(spanElBefore).toBeInTheDocument();

    // Act
    const btn = screen.getByRole('button', { name: 'カウントアップ' });
    // クリックイベントを発火させる
    fireEvent.click(btn);

    // Assertion
    const spanEl = screen.getByText('現在のカウント:1');
    expect(spanEl).toBeInTheDocument();
});
