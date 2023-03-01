<template>
  <tr>
    <td>{{ listData.id }}</td>
    <td>{{ listData.title }}</td>
    <td>{{ listData.body }}</td>
    <td>{{ listData.userId }}</td>
    <td>
      <button @click="handleDetail" type="button" class="btn btn-primary">Detail</button>
    </td>
  </tr>
</template>

<script>
import router from "../router/index";
export default {
  name: "TableRow",
  methods: {
    handleDetail() {
      router.push({
        name: "detail",
        params: {
          id: this.listData.id,
        },
      });
    },
  },
  props: { listData: Object },
};
</script>

<style></style>
