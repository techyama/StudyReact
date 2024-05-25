import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントの動作確認', () => {
    describe('初期表示の正常性確認', () => {
        test('入力された文字が画面上に表示されているか', () => {
            render(<Message />);
            const h2El = screen.getByRole('heading', { name: '入力された文字:'});
            expect(h2El).toBeInTheDocument();
        });
    });

    describe('画面操作の正常性確認', () => {
        test('入力値の変更 > 送信ボタン押下', async () => {
            // userオブジェクトの関数でイベントを発火(公式推奨)
            const user = userEvent.setup();
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            const btnEl = screen.getByRole('button', { name: '送信ボタン' });
            const h2El = screen.getByRole('heading', { name: '入力された文字:'});

            // 非活性か
            expect(btnEl).toBeDisabled();
            // 入力欄が空か
            expect(inputEl.value).toBe('');

            // テキストボックスに「こんにちは」をタイプ
            await user.type(inputEl, 'こんにちは');
            
            // 活性化したか
            expect(btnEl).not.toBeDisabled();

            // ボタンクリックイベントを発火
            await user.click(btnEl);

            // 入力された文字が反映されているか
            expect(h2El.textContent).toBe('入力された文字:こんにちは');
        });
    });
});
