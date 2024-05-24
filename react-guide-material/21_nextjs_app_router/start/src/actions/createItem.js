// サーバー側で実行するためのキーワード
"use server";

import { ENDPOINT } from "@/constants";

// サーバーアクション用関数
export async function createItem(formData) {
    const id = formData.get('id');
    const title = formData.get('title');
    
    if(id === '' || title === '') {
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, title })
            });
            const data = await res.json();
            // サーバーアクションの場合、Responseオブジェクトは不要
            // 自動的にResponseオブジェクトに変換される return Response.json(data);
            return data;
        } catch {
            return { msg: '登録に失敗しました。' };
        }
    }
}
