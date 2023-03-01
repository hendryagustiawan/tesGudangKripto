import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("data", {
  state: () => {
    return {
      data: [],
      getOne: {},
    };
  },
  actions: {
    getAllData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) => {
          //   console.log(data);
          this.data = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetail(id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(({ data }) => {
          this.getOne = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
