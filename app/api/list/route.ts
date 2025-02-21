// app/api/list/route.ts
import { NextResponse } from "next/server";
import { ListItem } from "../../types";

// 模拟 API 延迟
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  // 模拟服务端延迟
  await delay(2000);

  const data: ListItem[] = [
    {
      id: 1,
      title: "Item 1",
      description: `Description 1 - ${Math.round(Math.random() * 100)}`,
    },
    {
      id: 2,
      title: "Item 2",
      description: `Description 2 - ${Math.round(Math.random() * 100)}`,
    },
    {
      id: 3,
      title: "Item 3",
      description: `Description 3 - ${Math.round(Math.random() * 100)}`,
    },
  ];

  return NextResponse.json(data);
}
