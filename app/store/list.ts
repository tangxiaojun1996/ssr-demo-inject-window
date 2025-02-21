import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import type { ListItem } from "../types";

class List {
  data: ListItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setData(data: ListItem[]) {
    this.data = data;
  }

  initData() {
    const initialData = window._initialData;
    console.log("window._initialData", initialData);
    if (initialData) {
      this.setData(initialData);
    }
  }
}

const listStore = new List();
if (typeof window !== "undefined") {
  listStore.initData();
}

const listContext = createContext({ listStore });

export { listStore, listContext };
