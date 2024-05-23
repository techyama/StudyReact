import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

// SGに変更
export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then(res => res.json());
  return data.map(record => ({ id: record.id }));
}

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
