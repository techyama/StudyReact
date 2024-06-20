import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// 複数のテストをまとめる
describe('Counterコンポーネントの動作確認', () => {
  // 入れ後も可能
  describe('初期表示の確認', () => {
    test('現在のカウントが0で表示されるか', () => {
      render(<Counter originCount={0} />);
    
      const spanElFirstDisp = screen.getByText("現在のカウント:0");
      expect(spanElFirstDisp).toBeInTheDocument();
    });

    test('現在のカウントが1で表示されるか', () => {
      render(<Counter originCount={1} />);
    
      const spanElFirstDisp = screen.getByText("現在のカウント:1");
      expect(spanElFirstDisp).toBeInTheDocument();
    });
  });

  describe('ボタン制御の確認', () => {
    test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
      render(<Counter originCount={0} />);
    
      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();
    
      const btn = screen.getByRole("button", { name: "カウントアップ" });
      fireEvent.click(btn);
    
      const spanEl = screen.getByText("現在のカウント:1");
      expect(spanEl).toBeInTheDocument();
    });
  
    test("「カウントダウン」押下で「現在のカウント」が-1されるか", () => {
      render(<Counter originCount={0} />);
    
      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();
    
      const btn = screen.getByRole("button", { name: "カウントダウン" });
      fireEvent.click(btn);
    
      const spanEl = screen.getByText("現在のカウント:-1");
      expect(spanEl).toBeInTheDocument();
    });
  
    test("「クリアボタン」押下で「現在のカウント」が0になるか", () => {
      render(<Counter originCount={999} />);
    
      const spanElBeforeUpdate = screen.getByText("現在のカウント:999");
      expect(spanElBeforeUpdate).toBeInTheDocument();
  
      const btn = screen.getByRole("button", { name: "クリア" });
      fireEvent.click(btn);
    
      const spanEl = screen.getByText("現在のカウント:0");
      expect(spanEl).toBeInTheDocument();
    });
  });
});
