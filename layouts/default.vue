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
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
