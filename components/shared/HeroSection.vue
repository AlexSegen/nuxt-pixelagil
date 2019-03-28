<template>
    <div class="ui-hero section">
        <div class="hero-padding">
            <div class="container">
                <div class="col-sm-6 col-xs-12">
                    <div class="hero-content">
                        <h1 class="header-1 ">{{ heroTitle }}</h1>
                        <p v-html="heroSubtitle"></p>
                        <div class="cta-group">
                            <router-link v-if="!hideit" to='/contacto' class="btn btn-theme border round">Contáctame</router-link>
                            <router-link to='/orden' class="btn btn-theme round btn-cta">Pedir Cotización</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img v-if="!hideit" src="@/assets/img/fig-galaxy.png" class="fig01" alt="">
    </div>
</template>
<script>
export default {
  name: "HeroSection",
  data() {
    return {

    };
  },
  props:['heroTitle','heroSubtitle','hideit']
};
</script>
