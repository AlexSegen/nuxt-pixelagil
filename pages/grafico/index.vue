<template>
	<div class="graphics">

		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description"/>

		<section>

			<div class="container">
				<article class="well page-content">

					<div class="row">

						<div class="col-md-6 row-design text-justify">
							<vcl-list v-if="loadingPage"></vcl-list>
 							<div v-else v-html="pageInfo.content"></div>
						</div>

						<div class="col-md-6">
							<figure class="pmd-z-depth-1 mb-10 mt-10">
								<img src="@/assets/img/geekmotion-designer-man.jpg" alt="Designer" class="img-responsive center-block">
							</figure>
						</div>

					</div>


					<div class="row row-design mt-40" v-show="!loadingPage">

						<div class="col-md-12">
							<h3 class="text-dark bold">Servicios de Diseño</h3>

							<div class="ui-divider second left"></div>
						</div>

						<div class="col-md-4">
							<div class="item media well">
								<div class="media-left">
									<a href="#">
										<img class="media-object" src="@/assets/img/design-logos.png" alt="..." width="80px;">
									</a>
								</div>
								<div class="media-body">
									<h4 class="media-heading text-dark">Diseño de Logos</h4>
									Crearción de un nuevo logo para tu empresa o darle un refrescamiento profesional a tu logo actual
								</div>
							</div>

						</div>

						<div class="col-md-4">
							<div class="item media well">
								<div class="media-left">
									<a href="#">
										<img class="media-object" src="@/assets/img/design-cards.png" alt="..." width="80px;">
									</a>
								</div>
								<div class="media-body">
									<h4 class="media-heading text-dark">Tarjetas</h4>
									Permite que tus clientes te contacten de una manera profesional y con un buen diseño.
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="item media well">
								<div class="media-left">
									<a href="#">
										<img class="media-object" src="@/assets/img/design-web-banners.png" alt="..." width="80px;">
									</a>
								</div>
								<div class="media-body">
									<h4 class="media-heading text-dark">
										Banners o Flyers
									</h4>
									¿Necesitas nuevos banners para tu sitio web? Puedo mantener tu línea gráfic actual o crear una nueva para ti.
								</div>
							</div>
						</div>

					</div>

				</article>
			</div>

		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { VclList } from 'vue-content-loading';
import HeroSection from '@/components/shared/HeroSection.vue'
export default {
	name:'GraphicDesign',
	metaInfo: {
	  title: 'Diseño Gráfico '  +  process.env.VUE_APP_NAME,
	  	meta: [
			{name: 'description', content: 'Proceso impecable para diseño de logos atractivos y otros productos con 100% de satisfacción garantizada..'},
			{content:"Pixelagil · Diseño Gráfico", property:"og:title"},
			{content: "Proceso impecable para diseño de logos atractivos y otros productos con 100% de satisfacción garantizada.", property: "og:description" }
		],
		links: [
			{rel: 'canonical', href: 'https://pixelagil.com/graficos'}
		]
    },
	components: {
		HeroSection,VclList
	},
	data(){
		return{
			heroTitle:'Diseño Gráfico',
			heroSubtitle:'Contenido gráfico para tu <span>marca corporativa</span>'
		}
	},
	computed: {
		...mapGetters('pages', ['pageInfo','loadingPage'])
	}
}
</script>