<template>
	<div class="web">
		
		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description"/>

		<section class="">
			<div class="container">
				<article class="well page-content">

					<div class="row">


						<div class="col-md-6">

							<div class="gm-divider second left"></div>

							<!-- <p class="text-justify">
								¿Estás comenzando un nuevo negocio y necesitas un <b>sitio web profesional?</b> Bueno, no busques más, en <b>{{siteName}}</b> tengo la solución para ti. Tu <b>sitio web</b> será la representación de tu negocio, por eso es importante que el trabajo se haga con mucho profesionalismo. Incluso, puedo realizar mantenimiento a su sitio web actual para que puedas centrarte en el crecimiento del mismo.
							</p>

							<p class="text-justify">
								Puedo proporcionarle diseños <b>elegantes</b> e <b>innovadores</b>, y con los <b>servicios de SEO</b> podrá generar más clientes potenciales.
							</p>

							<ul class="list-unstyled mb-20">
								<p class="text-theme bold">Experiencia garantizada en Diseño Web, Interfaz de Usuario y Experiencia de Usuario.</p>
								<li>
									<i class="fa fa-minus text-theme02"></i> 
									Diseño y desarrollo de sitios web
								</li>
								<li>
									<i class="fa fa-minus text-theme02"></i> 
									Administración de sitios web
								</li>
								<li>
									<i class="fa fa-minus text-theme02"></i> 
									Diseño web responsive (para dispositivos móviles
								</li>
								<li>
									<i class="fa fa-minus text-theme02"></i> 
									Diseño de sitios en WordPress
								</li>
								<li>
									<i class="fa fa-minus text-theme02"></i> 
									Diseño de Blogs
								</li>
								<li>
									<i class="fa fa-minus text-theme02"></i> 
									Optimización para buscadores (SEO)
								</li>
							</ul>
 -->
 							<div v-html="pageInfo.content"></div>
							<a href="#pricing" class="btn btn-theme pmd-ripple-effect btn-lg smoothScroll">Ver Planes</a>

						</div>

						<div class="col-md-6">

							<figure class="pmd-z-depth-1 mb-10 mt-10">
								<img src="@/assets/img/geekmotion-web-design-man.jpg" alt="Web Design"
								class="img-responsive  center-block">
							</figure>

						</div>

					</div>

				</article>

			</div>
		</section>

		<my-pricing/>


		<section class="mt-40 pt-10 pb-30 section-bg031">
			<div class="container">

				<h2 class="text-center text-dark bold mb-40">¿CÓMO SERÁ TU PROYECTO FINAL?</h2>
				<div class="ui-divider second"></div>

				<div class="row row-wedo">
					<div class="col-md-4 col-sm-4">
						<div class="item">
							<figure>
								<i class="fa fa-mobile fa-5x" aria-hidden="true"></i>
							</figure>
							<h4 class="text-theme02">DISEÑO RESPONSIVE</h4>
							<p>Sitio Web 100% adaptativo. Tu sitio se verá bien tanto en PC como en dispositivos móviles.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="item">
							<figure>
								<i class="fa fa-rocket fa-5x" aria-hidden="true"></i>
							</figure>
							<h4 class="text-theme02">DISEÑO MODERNO</h4>
							<p>Obtendrás un trabajo de altura, calidad y además con las últimas tecnologías de desarrollo web.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="item">
							<figure>
								<i class="fa fa-search fa-5x" aria-hidden="true"></i>
							</figure>
							<h4 class="text-theme02">OPTIMIZADO PARA BUSCADORES</h4>
							<p>Listo para ser encontrado a través de los buscadores más populares y obtener presencia en Internet.</p>
						</div>
					</div>
				</div>

				<div class="row row-wedo features">
					<div class="col-md-4 col-sm-4">
						<div class="item">
							<figure>
								<i class="fa fa-bolt fa-5x" aria-hidden="true"></i>
							</figure>
							<h4 class="text-theme02">RÁPIDO Y ÓPTIMO</h4>
							<p>La mejor experiencia de usuario está garantizada, tus clientes navegarán con la mejor rapidéz.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="item">
							<figure>
								<i class="fa fa-gears fa-5x" aria-hidden="true"></i>
							</figure>
							<h4 class="text-theme02">DISEÑO PROFESIONAL</h4>
							<p>Tu sitio será diseñado por un profesional con mas de 5 años de experiencia en grandes proyectos.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="item">
							<figure>
								<i class="fa fa-file fa-5x" aria-hidden="true"></i>
							</figure>
							<h4 class="text-theme02">ARCHIVOS DEL PROYECTO</h4>
							<p>Una vez culminado, tendrás acceso a todos los ficheros necesarios para publicar tu sitio web.</p>
						</div>
					</div>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyPricing from '@/components/web/MyPricing.vue'
import HeroSection from '@/components/shared/HeroSection.vue'

export default {
	name:'WebDesign',
	metaInfo: {
	  title: 'Diseño Web '  +  process.env.VUE_APP_NAME,
	  	meta: [
			{name: 'description', content: '¿Necesitas tener tu sitio web? Con mis habiliades puedo crear un espacio digital para tu organización optimizado para cualquier plataforma'},
			{content:"Pixelagil · Diseño Web", property:"og:title"},
			{content: "¿Necesitas tener tu sitio web? Con mis habiliades puedo crear un espacio digital para tu organización optimizado para cualquier plataforma", property: "og:description" }
		],
		links: [
			{rel: 'canonical', href: 'https://pixelagil.com/web'}
		]
    },
    components: {
        HeroSection, MyPricing
	},
	data(){
		return{
			siteName: process.env.VUE_APP_NAME,
			heroTitle:'Diseño Web',
			heroSubtitle:'¿Necesitas tu propio sitio web?'
		}
	},
	computed: {
		...mapGetters('pages', ['pageInfo'])
	}
}
</script>