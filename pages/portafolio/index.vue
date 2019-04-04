<template>
	<div class="wrapper">

		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description"/>

		<section>
			<div class="container-fluid">

					<div class="row row-portfolio">

						<my-project/>

					</div>
			</div>
		</section>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyProject from '@/components/portfolio/MyProject.vue'
import HeroSection from '@/components/shared/HeroSection.vue'
export default {
	components: {
		MyProject,
		HeroSection
	},
    metaInfo: {
	  title: 'Portafolio '   +  process.env.VUE_APP_NAME,
	  	meta: [
			{name: 'description', content: 'Lo que se muestra en el siguiente portafolio son algunos de los trabajos mas recientes. Mis soluciones web te permiten mostrar tu negocio de una manera profesional y de calidad..'},
			{content:"Pixelagil · Portafolio", property:"og:title"},
			{content: "Lo que se muestra en el siguiente portafolio son algunos de los trabajos mas recientes. Mis soluciones web te permiten mostrar tu negocio de una manera profesional y de calidad.", property: "og:description" }
		],
		links: [
			{rel: 'canonical', href: 'https://pixelagil.com/portafolio'}
		]
    },
	data(){
		return{
			heroTitle:'Mis Trabajos',
			heroSubtitle:'Lo que se muestra en el siguiente portafolio son algunos de los trabajos mas recientes. Mis soluciones web te permiten mostrar tu negocio de una manera profesional y de calidad.'
		}
	},
	computed: {
		...mapGetters('pages', ['pageInfo'])
	}
}
</script>

<style>