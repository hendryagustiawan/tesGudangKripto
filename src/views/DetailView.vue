<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ getOne.title }}</h5>
            <p class="card-text">{{ getOne.body }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../store";
export default {
  name: "Detail",
  computed: {
    ...mapState(useDataStore, ["getOne"]),
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(useDataStore, ["getDetail"]),
  },
  created() {
    this.getDetail(this.id);
  },
};
</script>

<style></style>
