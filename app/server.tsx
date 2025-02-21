import ListComponent from "./List";

async function getList() {
  // 在服务端获取数据
  const res = await fetch("http://localhost:3000/api/list", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function ServerList() {
  const items = await getList();

  // 将服务端获取的数据传递给客户端组件
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window._initialData = ${JSON.stringify(items)};`,
        }}
      />
      <ListComponent initialItems={items} />
    </>
  );
}
