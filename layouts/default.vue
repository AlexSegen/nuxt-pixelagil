<template>
  <div>
    <my-header/>
      <nuxt />
    <my-footer/>
  </div>
</template>
<script>
import MyHeader from "~/components/shared/MyHeader.vue";
import MyFooter from "~/components/shared/MyFooter.vue";

import api from "@/services/pages.services";

export default {
  name: "Layout",
  components: {
    MyFooter,
    MyHeader
  },
  data() {
    return {
      page: {}
    }
  },
  created() {
    console.log(this.$route.name)
  },
  methods: {
    getPageInfo() {
      api.getByRouteName()
    }
  }
};
</script>
<style>
.well {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
