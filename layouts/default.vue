<template>
  <div>
    <my-header/>
      <nuxt />
    <my-footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import MyHeader from "~/components/shared/MyHeader.vue";
import MyFooter from "~/components/shared/MyFooter.vue";

export default {
  name: "Layout",
  components: {
    MyFooter,
    MyHeader
  }
};
</script>
<style>
.well {
  border: 1px solid transparent !important;
  -webkit-box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1)!important;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1)!important;
}
</style>
