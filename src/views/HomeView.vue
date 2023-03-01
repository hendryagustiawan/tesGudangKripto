<template>
  <div class="container">
    <table class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">UserId</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <TableRow v-for="listData in data" :key="listData.id" :listData="listData" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "../components/TableRow.vue";
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../store";
export default {
  name: "Home",
  computed: {
    ...mapState(useDataStore, ["data"]),
  },
  methods: {
    ...mapActions(useDataStore, ["getAllData"]),
  },
  created() {
    this.getAllData();
  },
  components: {
    TableRow,
  },
};
</script>

<style></style>
