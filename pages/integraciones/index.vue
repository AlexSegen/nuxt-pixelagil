<template>
	<div class="integrations">

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
							<figure class="-1 mb-10 mt-10">
								<img src="@/assets/img/geekmotion-integrations.jpg" alt="Designer"
								class="img-responsive  center-block">
							</figure>
						</div>

					</div>


					<div class="row row-integrations mt-40" v-show="!loadingPage">

						<div class="col-md-12">
							<h3 class="text-dark bold">Integraciones</h3>

							<div class="ui-divider second left mb-40"></div>
						</div>

						<div class="col-md-4">
							<div class="well media-inline pmd-well-default">
								<div class="media">
									<div class="media-body">
										<h3 class="pmd-well-title-text">Integrar Wordpress</h3>
										<span class="pmd-well-subtitle-text">50USD</span>
									</div>
									<div class="media-right media-middle">
										<a href="javascript:void(0);">
											<img width="180" height="110"
											src="@/assets/img/integrations/integration-wordpress.jpg">
										</a>
									</div>
								</div>
								<div class="pmd-well-actions">
									<router-link class="btn pmd-btn-flat pmd-ripple-effect btn-theme02 btn-sm"
									to="/orden">Ordenar</router-link>
									<a class="btn pmd-btn-flat pmd-ripple-effect btn-link btn-sm"
									href="http://www.wordpress.com/" target="_blank">Info</a>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="well media-inline pmd-well-default ">
								<div class="media">
									<div class="media-body">
										<h3 class="pmd-well-title-text">Integrar phpBB</h3>
										<span class="pmd-well-subtitle-text">40USD</span>
									</div>
									<div class="media-right media-middle">
										<a href="javascript:void(0);">
											<img width="180" height="110"
											src="@/assets/img/integrations/integration-phpbb.jpg">
										</a>
									</div>
								</div>
								<div class="pmd-well-actions">
									<router-link class="btn pmd-btn-flat pmd-ripple-effect btn-theme02 btn-sm"
									to="/orden">Ordenar</router-link>
									<a class="btn pmd-btn-flat pmd-ripple-effect btn-link btn-sm" href="https://www.phpbb.com/"
									target="_blank">Info</a>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="well media-inline pmd-well-default ">
								<div class="media">
									<div class="media-body">
										<h3 class="pmd-well-title-text">Integrar IPBoard</h3>
										<span class="pmd-well-subtitle-text">No disponible</span>
									</div>
									<div class="media-right media-middle">
										<a href="javascript:void(0);">
											<img width="180" height="110"
											src="@/assets/img/integrations/integration-ipboard.jpg">
										</a>
									</div>
								</div>
								<div class="pmd-well-actions">
									<a class="btn pmd-btn-flat pmd-ripple-effect btn-theme02 btn-sm notification-trigger" href="#!"
									data-trigger="hover" data-toggle="popover" data-placement="top"
									data-content="No disponible">Ordenar</a>
									<a class="btn pmd-btn-flat pmd-ripple-effect btn-link btn-sm" href="https://www.phpbb.com/"
									target="_blank">Info</a>
								</div>
							</div>
						</div>

						<div class="clearfix"></div>

						<div class="col-md-4">
							<div class="well media-inline pmd-well-default ">
								<div class="media">
									<div class="media-body">
										<h3 class="pmd-well-title-text"> SM Forum</h3>
										<span class="pmd-well-subtitle-text">30USD</span>
									</div>
									<div class="media-right media-middle">
										<a href="javascript:void(0);">
											<img width="180" height="110"
											src="@/assets/img/integrations/integration-smf.jpg">
										</a>
									</div>
								</div>
								<div class="pmd-well-actions">
									<router-link class="btn pmd-btn-flat pmd-ripple-effect btn-theme02 btn-sm"
									to="/orden">Ordenar</router-link>
									<a class="btn pmd-btn-flat pmd-ripple-effect btn-link btn-sm"
									href="https://www.simplemachines.org/" target="_blank">Info</a>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="well media-inline pmd-well-default ">
								<div class="media">
									<div class="media-body">
										<h3 class="pmd-well-title-text">Integrar PayPal</h3>
										<span class="pmd-well-subtitle-text">30USD</span>
									</div>
									<div class="media-right media-middle">
										<a href="javascript:void(0);">
											<img width="180" height="110"
											src="@/assets/img/integrations/integration-paypal.jpg">
										</a>
									</div>
								</div>
								<div class="pmd-well-actions">
									<router-link class="btn pmd-btn-flat pmd-ripple-effect btn-theme02 btn-sm notification-trigger" to="/orden">Ordenar</router-link>
									<a class="btn pmd-btn-flat pmd-ripple-effect btn-link btn-sm"
									href="https://developer.paypal.com/" target="_blank">Info</a>
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
	name:'Integrations',
	metaInfo: {
	  title: 'Integraciones ' +  process.env.VUE_APP_NAME,
	  	meta: [
			{name: 'description', content: 'Te ofrezco la posibilidad de hacer crecer tu negocio virtual.'},
			{content:"Pixelagil · Integraciones", property:"og:title"},
			{content: "Te ofrezco la posibilidad de hacer crecer tu negocio virtual.", property: "og:description" }
		],
		links: [
			{rel: 'canonical', href: 'https://pixelagil.com/integraciones'}
		]
    },
	components: {
		HeroSection, VclList
	},
	data(){
		return{
			heroTitle:'Integraciones',
			heroSubtitle:'Agrega nuevas características a tu negocio'
		}
	},
	computed: {
		...mapGetters('pages', ['pageInfo','loadingPage'])
	}
}
</script>