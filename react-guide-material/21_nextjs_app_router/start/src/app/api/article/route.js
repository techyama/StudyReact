// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
    const data = await fetch(ENDPOINT).then(res => res.json());
    // dataオブジェクトをJSONに変換してブラウザに渡す
    return Response.json(data);
}

export async function POST(request) {
    const formData = await request.formData();
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
            return Response.json(data);
        } catch {
            return Response.json({ msg: '登録に失敗しました。' }, { status: 500 })
        }
    }
    
}