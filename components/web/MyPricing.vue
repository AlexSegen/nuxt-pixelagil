<template>
	<section id="pricing" class="mt-40 pt-20 pb-30 section-bg03">
		<div class="container">
			<div class="col-md-10 col-md-offset-1 text-center mb-30">
				<h2 class="section-title2 text-dark text-uppercase bold">
					MIS PLANES
				</h2>
				<div class="ui-divider second"></div>
				<p>
				Hoy en día los espacios corporativos a través de Internet son de suma importancia. No te quedes por fuera. Te ayudo a tener tu propio sitio web, con una presentación profesional, de alta calidad y lo además adaptado a tu negocio.
				</p>
			</div>
			<div class="row row-pricing">
				<div class="col-md-4 col-sm-4 col-xs-12"  v-for="item in plans" v-bind:key="item.id">
					<div class="pricing-box wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
						<div class="pricing-header">
							<h2>{{ item.name }}</h2>
							<p class="subheader">
								{{ item.sub }}
							</p>
						</div>
						<div class="pricing-body">
							<div class="pricing-amount">
								<h1>{{ item.price }} <span class="sub">USD</span></h1>
							</div>
							<div class="pricing-features">
								<ul class="list-unstyled list">
									<li v-for="(feature,index) in item.features" :key="index"><i class="fa fa-minus text-theme02"></i> {{feature }}</li>
								</ul>
							</div>
							<div class="cta text-center">
								<router-link to="/orden" class="btn btn-theme btn-lg">QUIERO ESTE PLAN</router-link>
							</div>
						</div>
					</div>
				</div>


			</div>
			<ul class="list-unstyled text-muted pull-right">
				<li><span class="text-theme">*</span> Solo configuro Hosting y Dominio. No los vendo.</li>
				<li><span class="text-theme02">**</span> Secciones adicionales tienen costos adicionales.</li>
			</ul>
		</div>
	</section>
</template>


<script>
import planServices from '@/services/plan.services';
export default {
	name: 'plans',
	created(){
		this.getPlans();
	},
	data () {
		return {
			icon:'',
			name:'',
			sub:'',
			price:'',
			plans:[],
			feature:'',
			features:[],
			index:'',
			errors:[],
			loading: false,
		}
	},
	methods:{
		getPlans(){
			this.loading = true;
			planServices.get().then(response => {
				this.plans = response.data
				this.loading = false
			}).catch(error => {
				console.log(error.message)
				this.loading = false
			})
		}
	}
}
</script>