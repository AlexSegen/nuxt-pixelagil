<template>
	<div class="contacto">

		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description" :hideit="true"/>

		<section>
			<div class="container">
				<article class="page-content">

					<div class="row">
						<div class="col-md-6" v-if="loadingPage">
							<vcl-list ></vcl-list>
						</div>

						<div v-else class="col-md-8 col-md-offset-2" v-html="pageInfo.content">
						</div>

						<div v-show="!loadingPage" class="col-md-8 col-md-offset-2 text-center mt-20">
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

						<div v-show="!loadingPage" class="col-md-8 col-md-offset-2">
							<my-form/>
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
import { VclList } from 'vue-content-loading';
import MyForm from "@/components/contact/MyForm.vue";
import HeroSection from "@/components/shared/HeroSection.vue";

export default {
  components: {
    MyForm,
	HeroSection,
	VclList
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
		...mapGetters('pages', ['pageInfo','loadingPage'])
	}
};
</script>