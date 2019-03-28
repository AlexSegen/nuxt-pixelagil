<template>
<div class="home">
   <Hero/>
    <section>
      <div class="container">
        <div class="row row-services">
          <div class="col-sm-4">
            <nuxt-link :to="{ name: 'web' }" class="ui-service">
              <figure>
                <img src="@/assets/img/fig-webdesign.png" alt="">
              </figure>
              <h3>Diseño Web</h3>
              <p class="ui-description">
                Tu propio sitio web profesional bajo las más novedosas herramientas y plataformas, HTML5, JavaScript, CSS3, PHP.
              </p>
              <p class="ui-more">Ver más</p>
            </nuxt-link>
          </div>
          <div class="col-sm-4">
            <nuxt-link :to="{ name: 'integrations' }" class="ui-service">
              <figure>
                <img src="@/assets/img/fig-integrations.png" alt="">
              </figure>
              <h3>Integraciones</h3>
              <p class="ui-description">
                Incluye nuevas características en tu sitio actual tales como Foros, Pasarelas de Pago, Blogs y mucho más.
              </p>
              <p class="ui-more">Ver más</p>
            </nuxt-link>
          </div>
          <div class="col-sm-4">
            <nuxt-link :to="{ name: 'graphic' }" class="ui-service">
              <figure>
                <img src="@/assets/img/fig-graphic.png" alt="">
              </figure>
              <h3>Diseño Gráfico</h3>
              <p class="ui-description">
                ¿Quieres un nuevo logo para tu empresa o actualizar el actual? Tengo la solución que estás buscando.
              </p>
              <p class="ui-more">Ver más</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

         <section class="mt-40 pt-40 pb-40 mb-40">
          <div class="container">
            <div class="row row-skills">
            <div class="col-md-6 text-center">
                <h2 class="section-title text-uppercase bold">
                Acerca de mi
                </h2>
                <div class="ui-divider"></div>
                <p>
                Me llamo Alejandro Vivas, soy Técnico en Informática, con 4 años de experiencia en Administración de Redes y actualmente 6 años con Desarrollo Frontend o Diseño Web. Realizo trabajos para empresas, individuos independientes e instituciones. Con mis habiliades puedo crear un espacio digital para tu organización y lo mejor de todo, optimizado para cualquier plataforma.
                </p>
                <p class="text-dark">
                <strong>Usando las últimas e innovadoras tecnologías de diseño web puedo ayudarte a mostrar tu negocio profesionalmente.</strong>
                </p>
                <p><img src="@/assets/img/fig-techs.png" class="center-block img-responsive mt-20 mb-20" alt="Tecnologías"></p>
            </div>
              <div class="col-sm-6">
                <h2 class="section-title text-uppercase text-center bold">
                Mis Habilidades
                </h2>
                <div class="ui-divider"></div>
                <ul class="skills-list">
                  <li class="skill">
                      <h3>HTML/HTML5 <span class="pull-right">98%</span></h3>
                      <div class="progress-rounded progress pmd-progress"><div class="progress-bar progress-bar-success bg-theme" style="width: 98%;"></div></div>
                  </li>
                  <li class="skill">
                      <h3>CSS/SCSS <span class="pull-right">96%</span></h3>
                      <div class="progress-rounded progress pmd-progress"><div class="progress-bar progress-bar-success bg-theme02" style="width: 96%;"></div></div>
                  </li>
                  <li class="skill">
                      <h3>JAVASCRIPT <span class="pull-right">75%</span></h3>
                      <div class="progress-rounded progress pmd-progress"><div class="progress-bar progress-bar-success bg-theme" style="width: 75%;"></div></div>
                  </li>

                  <li class="skill">
                      <h3>PHOTOSHOP <span class="pull-right">95%</span></h3>
                      <div class="progress-rounded progress pmd-progress"><div class="progress-bar progress-bar-success bg-theme" style="width: 95%;"></div></div>
                  </li>
                  <li class="skill">
                      <h3>ILLUSTRATOR <span class="pull-right">85%</span></h3>
                      <div class="progress-rounded progress pmd-progress"><div class="progress-bar progress-bar-success bg-theme02" style="width: 85%;"></div></div>
                  </li>
                  <li class="skill">
                      <h3>XPERIENCE DESIGN <span class="pull-right">90%</span></h3>
                      <div class="progress-rounded progress pmd-progress"><div class="progress-bar progress-bar-success bg-theme" style="width: 90%;"></div></div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
    </section>
</div>

</template>

<script>
import Hero from "~/components/home/Hero.vue";

export default {
  components: {
    Hero
  }
}
</script>

<style>
</style>
