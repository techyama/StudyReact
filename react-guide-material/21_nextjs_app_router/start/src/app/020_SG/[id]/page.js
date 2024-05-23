import { paths } from "../paths";

export default function Page({ params }) {
  const date = new Date;
  return <h3>このページは{params.id}です。{date.toJSON()}</h3>;
}

// SGにするためのデフォルト関数
export async function generateStaticParams() {
  return paths;
}