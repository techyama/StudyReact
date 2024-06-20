import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントの動作確認', () => {
    // Q1.画面内にinput要素が表示されていることをテストしてください。
    test('画面内にinput要素が表示されているか', () => {
        render(<Message />);
        const inputEl = screen.getByRole('textbox');
        // 画面に存在するか
        expect(inputEl).toBeInTheDocument(); 
    });

    // Q2.input要素に値を入れると正しく値が更新されることをテストしてください。
    test('input要素に値を入れると正しく値が更新されるか', async () => {
        const user = userEvent.setup();
        render(<Message />);
        const inputEl = screen.getByRole('textbox');
        // 入力欄が空か
        expect(inputEl.value).toBe('');
        
        // 入力欄に「test」をタイプ
        await user.type(inputEl, 'テスト');
        expect(inputEl.value).toBe('テスト');
    });
});