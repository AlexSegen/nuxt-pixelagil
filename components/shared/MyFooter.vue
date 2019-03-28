<template>
  <footer class="ui-footer">
    <p class="ui-copyright">{{ appName }} {{ date.getFullYear() }} © todos los derechos reservados.</p>
    <router-link
      style="display:block;text-align:center;"
      :to="{ name: 'terms' }"
    >Términos de Servicio</router-link>
    <img src="@/assets/img/fig-satel.png" class="fig-curve satel" alt>
  </footer>
</template>
<script>
export default {
  name: "MyFooter",
  data() {
    return {
      appName: process.env.VUE_APP_NAME,
      date: new Date()
    };
  }
};
</script>

