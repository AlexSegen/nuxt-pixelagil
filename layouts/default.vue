<template>
  <div>
    <my-header/>
      <nuxt :page="page" />
    <my-footer/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import api from "@/services/pages.services";
import MyHeader from "~/components/shared/MyHeader.vue";
import MyFooter from "~/components/shared/MyFooter.vue";


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
  watch: {
    '$route' (to, from) {
      this.getPage(this.$route.name)
    }
  },
  mounted() {
    this.getPage(this.$route.name)
  },
  methods: {
    ...mapActions('pages', ['getPage'])
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
