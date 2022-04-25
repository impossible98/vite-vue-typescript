import { defineStore } from "pinia";
import { Name } from "./store-name";

export const useTestStore = defineStore(Name.Test, {
  state: () => {
    return {
      current: 1,
      name: "test",
    };
  },
  //   computed
  getters: {},
  //   methods
  actions: {},
});
