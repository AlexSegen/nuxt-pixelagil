<template>
	<div class="ordenar">

		<hero-section :heroTitle="pageInfo.title" :heroSubtitle="pageInfo.description"/>

		<div class="container">

            <article class="well page-content">
           
			<div class="row">
				<div class="col-md-12 text-justify" v-html="pageInfo.content">
      
<!--                         <p>
                            Para obtener alguno de mis servicios, por favor selecciona el que necesitas, y luego presiona el botón <strong>Agregar</strong> y <strong>repite</strong> (si aplica) como necesites. Una vez terminada tu selección, presiona el botón <strong>Cotizar</strong> para enviarme tu requerimiento. Una vez recibido, te contactaré lo antes posible.
                        </p>
                        <p>Recuerda leer los <router-link :to="{ name:'terms' }">Términos de Servicio</router-link> antes de adquirir alguno.</p> -->

				</div>

				<div class="col-md-8">
					<div class="services-area">
						<h3 class="title-area">Servicios disponibles</h3>

						<div class="card1">
							<div class="pmd-tabs pmd-tabs-bg">
								<ul class="nav nav-tabs nav-justified" role="tablist">
									<li role="presentation" class="active"><a href="#web" aria-controls="web" role="tab" data-toggle="tab">Diseño Web</a></li>
									<li role="presentation"><a href="#integration" aria-controls="integration" role="tab" data-toggle="tab">Integraciones</a></li>
									<li role="presentation"><a href="#design" aria-controls="design" role="tab" data-toggle="tab">Diseño Gráfico</a></li>
									<li role="presentation"><a href="#configuration" aria-controls="configuration" role="tab" data-toggle="tab">Setup</a></li>
								</ul>
							</div>
							<div class="pmd-card-body" id="services">
								<div v-if="loading"  class="proloader">
									<div class="looping-rhombuses-spinner">
										<div class="rhombus"></div>
										<div class="rhombus"></div>
										<div class="rhombus"></div>
									</div>
								</div>
								<div class="tab-content">
									<div role="tabpanel" class="tab-pane active" id="web">
										<ul class="list-group pmd-list services-list">
											<li class="list-group-item" v-for="service in webCategory" :key="'web_'+service.id">
												<div class="media-left">
													<a class="avatar-list-img avatar-list-img-custom" href="javascript:void(0);"  @click="addProductToCart(service)">
														<img data-holder-rendered="true" src="/img/android-chrome-192x192.png" style="width:40px; height:40px;" class="img-responsive" data-src="holder.js/40x40" :alt="service.name">
													</a>
												</div>
												<div class="media-body media-middle">
													<h3 class="list-group-item-heading">{{ service.name }}</h3>
													<span class="list-group-item-text hide">Precio: USD {{ service.price }}</span>
													<button class="btn btn-xs  btn-success pull-right" type="button"  @click="addProductToCart(service)"><i class="fa fa-plus-circle"></i> Agregar</button>
												</div>
												<div class="panel1 panel-default"> 
													<div class="panel-heading" role="tab" id="headingTwo">
														<h4 class="panel-title">
														<a v-b-toggle="'web_'+service.id" >Ver detalles <i class="fa fa-plus-circle text-theme"></i></a>
														</h4>
													</div>
													<b-collapse :id="'web_'+service.id">
														<div class="panel-body" v-html="service.description"></div>
													</b-collapse>
												</div>
											</li>
										</ul>
									</div>
									<div role="tabpanel" class="tab-pane" id="integration">
										<ul class="list-group pmd-list services-list">
											<li class="list-group-item" v-for="service in integrationCategory" :key="'inte_'+service.id">
												<div class="media-left">
													<a class="avatar-list-img avatar-list-img-custom" href="javascript:void(0);"  @click="addProductToCart(service)">
														<img data-holder-rendered="true" src="/img/android-chrome-192x192.png" style="width:40px; height:40px;" class="img-responsive" data-src="holder.js/40x40" :alt="service.name">
													</a>
												</div>
												<div class="media-body media-middle">
													<h3 class="list-group-item-heading">{{ service.name }}</h3>
													<span class="list-group-item-text hide">Precio: USD {{ service.price }}</span>
													<button class="btn btn-xs  btn-success pull-right" type="button"  @click="addProductToCart(service)" v-bind:disabled="service.status == 0"><i class="fa fa-plus-circle"></i> Agregar</button>
												</div>
												<div class="panel1 panel-default"> 
													<div class="panel-heading" role="tab" id="headingTwo">
														<h4 class="panel-title">
															<a v-b-toggle="'inte_'+service.id" >Ver detalles <i class="fa fa-plus-circle text-theme"></i></a>
														</h4>
													</div>
													<b-collapse :id="'inte_'+service.id">
														<div class="panel-body" v-html="service.description"></div>
													</b-collapse>
												</div>
											</li>
										</ul>
									</div>
									<div role="tabpanel" class="tab-pane" id="design">
										<ul class="list-group pmd-list services-list">
											<li class="list-group-item" v-for="service in designCategory" :key="'gra_'+service.id">
												<div class="media-left">
													<a class="avatar-list-img avatar-list-img-custom" href="javascript:void(0);"  @click="addProductToCart(service)">
														<img data-holder-rendered="true" src="/img/android-chrome-192x192.png" style="width:40px; height:40px;" class="img-responsive" data-src="holder.js/40x40" :alt="service.name">
													</a>
												</div>
												<div class="media-body media-middle">
													<h3 class="list-group-item-heading">{{ service.name }}</h3>
													<span class="list-group-item-text hide">Precio: USD {{ service.price }}</span>
													<button class="btn btn-xs  btn-success pull-right" type="button"  @click="addProductToCart(service)"><i class="fa fa-plus-circle"></i> Agregar</button>
												</div>
												<div class="panel1 panel-default"> 
													<div class="panel-heading" role="tab" id="headingTwo">
														<h4 class="panel-title">
															<a v-b-toggle="'gra_'+service.id" >Ver detalles <i class="fa fa-plus-circle text-theme"></i></a>
														</h4>
													</div>
													<b-collapse :id="'gra_'+service.id">
														<div class="panel-body" v-html="service.description"></div>
													</b-collapse>
												</div>
											</li>
										</ul>
									</div>
									<div role="tabpanel" class="tab-pane" id="configuration">
										<ul class="list-group pmd-list services-list">
											<li class="list-group-item" v-for="service in otherCategory" :key="'oth_'+service.id">
												<div class="media-left">
													<a class="avatar-list-img avatar-list-img-custom" href="javascript:void(0);"  @click="addProductToCart(service)">
														<img data-holder-rendered="true" src="/img/android-chrome-192x192.png" style="width:40px; height:40px;" class="img-responsive" data-src="holder.js/40x40" :alt="service.name">
													</a>
												</div>
												<div class="media-body media-middle">
													<h3 class="list-group-item-heading">{{ service.name }}</h3>
													<span class="list-group-item-text hide">Precio: USD {{ service.price }}</span>
													<button class="btn btn-xs  btn-success pull-right" type="button"  @click="addProductToCart(service)" data-toggle="tooltip" data-placement="left" title="Agregar item"><i class="fa fa-plus-circle"></i> Agregar</button>
												</div>
												<div class="panel1 panel-default"> 
													<div class="panel-heading" role="tab" id="headingTwo">
														<h4 class="panel-title">
															<a v-b-toggle="'oth_'+service.id" >Ver detalles <i class="fa fa-plus-circle text-theme"></i></a>
														</h4>
													</div>
													<b-collapse :id="'oth_'+service.id">
														<div class="panel-body" v-html="service.description"></div>
													</b-collapse>
												</div>
											</li>
										</ul>
									</div>
								</div> <!-- tab-content -->
							</div>
						</div> <!-- Card services -->
					</div>
				</div> <!-- /.col-md-8 -->
				<div class="col-md-4"> 
					<div class="cart-area">
						<h3 class="title-area">Nueva cotización</h3>
						<ShoppingCart/>
					</div>
				</div> 
			</div>
            </article>

		</div>
	</div>
</template>

<script>
import moment from 'moment';
import orderServices from '@/services/order.services'
import HeroSection from '@/components/shared/HeroSection.vue'
import ShoppingCart from '@/components/orders/Cart'

import {mapState, mapGetters, mapActions} from 'vuex'

let now = moment().format('LLLL');

export default {
	components: {
		HeroSection, ShoppingCart
	},
	name: 'Orders',
	metaInfo: {
	  title: 'Pedir cotización '  +  process.env.VUE_APP_NAME,
	  	meta: [
			{name: 'description', content: 'Para obtener alguno de mis servicios, por favor selecciona el que necesitas para enviarme tu requerimiento.'},
			{content:"Pixelagil · Pedir cotización", property:"og:title"},
			{content: "Para obtener alguno de mis servicios, por favor selecciona el que necesitas para enviarme tu requerimiento", property: "og:description" }
		],
		links: [
			{rel: 'canonical', href: 'https://pixelagil.com/orden'}
		]
    },
	created(){
      this.fetchProducts().then(() => this.loading = false)
	},
	data() {
		return {
			loading:false,
			send:false,
			list:'',
			cartItems:[],
			name:'',
			email:'',
			order:'',
			total:'',
			date:now,
			services:{},
			heroTitle:'Ordenar ahora',
			heroSubtitle:'Con los <span>mejores precios del mercado</span>. Selecciona los servicios que desees'
		}
	},
	computed: {
      ...mapState({
        products: state => state.products.items
      }),
      ...mapGetters('products', {
		webCategory: 'webCategory',
		designCategory: 'designCategory',
		integrationCategory: 'integrationCategory',
		otherCategory: 'otherCategory',
			}),
		...mapGetters('pages', ['pageInfo']),
		numCartItems() {
			return this.cartItems.length;
		},
		totalCart(){
			return this.cartItems.reduce(function(totalCart, item){
				return totalCart + item.price; 
			},0);
		}
	},
	filters: {

		removeSpaces: function(value) {
			return value.replace(/\s/g, '').replace(/[^a-zA-Z #]/g, "").toLowerCase();
		}	
	},
	methods:{
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart'
      }),
		addItem(service){
			this.cartItems.push(service);
			//Add to localstorage browser
			localStorage.set("cartItems", JSON.stringify(this.cartItems));
		},
		removeItem(index) {
			this.cartItems.splice(index,1);
            //Update localstorage deleted carItems
			localStorage.set("cartItems", JSON.stringify(this.cartItems));
		},
		removeCart(item) {
			this.cartItems.splice(item);
			//Update localstorage deleted carItems
			localStorage.set("cartItems", JSON.stringify(this.cartItems));
		},
		saveOrder(item){
			let data = {
				date: this.date,
				name: this.name,
				email:this.email,
				total:this.totalCart,
				services:this.cartItems,
			}
			orderServices.post(data).then(response => {
				this.send = true;
				this.name ='';
				this.email ='';
				this.cartItems.splice(item);
				this.localStorage.remove("cartItems");
				this.errors = [] 
			}).catch(error => {
				this.errors= error.response.data
			})

		},
		getServices(){
			this.loading = true
			productServices.get().then(response => {
				this.services = response.data
				this.loading = false
			});
		}
	}
}
</script>

<style lang="scss" scoped>

.order-table{
	>tbody>tr>td{
		font-size:.9em;
	}
}

.cart-area{
	.title-area{
		font-size:1.5em;
		font-weight:200;
		color:#222222;
	}
}
.services-area{
	.title-area{
		font-size:1.5em;
		font-weight:200;
		color:#222222;
	}

	.services-list{
		btn{
			margin-top:-20px;
		}
	}
}

.media-description{
	padding:15px;
	font-size:.9em;
	overflow:hidden;
}

.order-form{
	padding:10px;
	margin-bottom:20px
}

#services,#order{
	position: relative;
	.proloader{
		position:relative;
		width:100%;
		height:300px;
		background:#fff;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align:center;
	}
}

.panel-default > .panel-heading {
	background-color: #fff;
}

</style>