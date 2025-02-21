// app/components/ListComponent.tsx
"use client";

import { useState, useEffect, useContext } from "react";
import { listContext, listStore } from "./store/list";
import type { ListItem } from "./types";

interface Props {
  initialItems: ListItem[]; // 从服务端获取的初始数据
}

export default function ListComponent({ initialItems }: Props) {
  // const [items, setItems] = useState<ListItem[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const { listStore } = useContext(listContext);
  const dataSource =
    typeof window === "undefined" ? initialItems : listStore.data;

  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/list");
      const data = await res.json();
      listStore.setData(data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={fetchList}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Refresh List"}
        </button>
      </div>

      <div className="space-y-4">
        {dataSource.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
