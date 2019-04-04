<template>
	<div class="terminos">

		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description"/>

		<section>
			<div class="container">
				<article class="well page-content pt-40">

					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-justify">
                            <p><img src="@/assets/img/logo-pixelagil.png" class="img-responsive center-block" alt=""></p>
                            <hr>


							<p>
								Al comprar en Pixelagil usted acepta y está obligado a aceptar todos los términos y condiciones de esta página. Pixelagil se reservam el derecho de cambiar estos términos y condiciones en cualquier momento sin notificación y para que puedan tener efecto inmediato, aunque normalmente se da a los usuarios registrados 30 días de aviso.
							</p>

							<h3 class="mb-10 mt-40 text-theme02">
								Notificación especial
							</h3>
							<p>
								Debido a la naturaleza de los negocios que opera Pixelagil, los términos de servicio adicionales pueden establecerse caso por caso. Cualquier término adicional le será proporcionado por Pixelagil antes de que se tome el pago. Si tiene alguna pregunta, por favor <router-link to="/contacto">contácte aquí</router-link>.
							</p>
							<div v-html="pageInfo.content"></div>


						</div>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>

<script>
import config from '@/config'
import { mapGetters } from 'vuex'
import HeroSection from '@/components/shared/HeroSection.vue'
export default {
	name:'Terms',
	metaInfo: {
	  title: 'Términos de Servicio '  +  config.app,
		meta: [
		{ name: "description", content: "¿Necesitas tener tu sitio web? Con mis habiliades puedo crear un espacio digital para tu organización optimizado para cualquier plataforma."},
		{ content: "Pixelagil · Términos de Servicio", property: "og:title" },
		{ content: "¿Necesitas tener tu sitio web? Con mis habiliades puedo crear un espacio digital para tu organización optimizado para cualquier plataforma.", property: "og:description" }
		],
		links: [
			{rel: 'canonical', href: 'https://pixelagil.com/terminos'}
		]
    },
	components: {
		HeroSection
	},
	data(){
		return{
			heroTitle:'Términos de Servicio',
			heroSubtitle:'Importante leer <span>antes de adquirir</span>',
			APP_NAME: config.app,
			APP_EMAIL: config.contact.email
		}
	},
	computed: {
		...mapGetters('pages', ['pageInfo'])
	}
}
</script>