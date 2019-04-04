<template>
	<div class="contacto">

		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description" :hideit="true"/>

		<section>
			<div class="container">
				<article class="page-content">

					<div class="row">

						<div class="col-md-8 col-md-offset-2" v-html="pageInfo.content">
						</div>

						<div class="col-md-8 col-md-offset-2 text-center mt-20">
							<ul class="list-inline bold">
								<li>
									<i class="fa fa-envelope-o text-theme02"></i> {{ email }}
								</li>
								<li>
									<i class="fa fa-phone text-theme02"></i> {{ phone }}
								</li>
								<li>
									<i class="fa fa-skype text-theme02"></i> {{ skype }}
								</li>
							</ul>
						</div>

						<div class="clearfix"></div>

						<div class="col-md-8 col-md-offset-2">
							<my-form/>
						</div>
						<div class="col-md-5 hide">

							<ul class="list-group pmd-list pmd-card-list">
								<li class="list-group-item">
									<i class="material-icons media-left media-middle">email</i>
									<div class="media-body">
										<h3 class="list-group-item-heading">{{email}}</h3>
										<span class="list-group-item-text">Correo de contacto</span>
									</div>
								</li>
								<li class="list-group-item">
									<i class="material-icons media-left media-middle">chat</i>
									<div class="media-body">
										<h3 class="list-group-item-heading">{{skype}}</h3>
										<span class="list-group-item-text">Skype</span>
									</div>
								</li>
								<li class="list-group-item">
									<i class="material-icons media-left media-middle">call</i>
									<div class="media-body">
										<h3 class="list-group-item-heading">{{phone}}</h3>
										<span class="list-group-item-text">Teléfono de contacto</span>
									</div>
								</li>
							</ul>

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
import MyForm from "@/components/contact/MyForm.vue";
import HeroSection from "@/components/shared/HeroSection.vue";

export default {
  components: {
    MyForm,
    HeroSection
  },
  data() {
    return {
		email: config.contact.email,
		phone: config.contact.phone,
		skype: config.contact.skype,
		heroTitle: "Contáctame",
		heroSubtitle: "¿Tienes alguna duda? Escríbeme"
    };
  },
	computed: {
		...mapGetters('pages', ['pageInfo'])
	}
};
</script>