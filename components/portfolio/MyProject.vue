<template>
	<div id="projects">

		<template v-if="loading">
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="item-portfolio" style="height: 280px; padding: 10px;">
					<vcl-twitch></vcl-twitch>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="item-portfolio" style="height: 280px; padding: 10px;">
					<vcl-twitch></vcl-twitch>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="item-portfolio" style="height: 280px; padding: 10px;">
					<vcl-twitch></vcl-twitch>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="item-portfolio" style="height: 280px; padding: 10px;">
					<vcl-twitch></vcl-twitch>
				</div>
			</div>
		</template>

		<div v-else class="col-md-3 col-sm-6 col-xs-12" v-for="project in projects" :key="project.id">
			<div class="item-portfolio">
				<div class="item-overlay">
					<div>
						<a class="btn btn-theme" data-fancybox="gallery" :href="project.photo">Vista Previa</a>
						<template v-if="project.url">
							<a :href="project.url" target="_blank" class="btn btn-theme02">Visitar</a>
						</template>
					</div>
				</div>
				<figure>
					<a data-fancybox="gallery" class="launh-fancybox" :href="'project.spanredes-preview.jpg'">
						 <img v-lazy="project.thumb" :alt="project.name" height="190px">
					</a>
				</figure>
				<figcaption>
					<div class="title">
						{{project.name}}
					</div>
					<div class="subtitle">
						{{project.category}}
					</div>
				</figcaption>
			</div>
		</div>

	</div>
</template>


<script>
import fancybox from 'fancybox'
import { VclTwitch } from 'vue-content-loading';
import portfolioServices from '@/services/portfolio.services'

export default {
	name: 'projects',
	components: {
	VclTwitch
	},
	created(){
		this.getProjects();
	},
	data () {
		return {
			projects:[],
			loading:false
		}
	},
	methods:{
		getProjects(){
			this.loading = true
			portfolioServices.get().then(response => {
				this.projects = response.data.projects.reverse();
				this.loading = false
			}).catch(error => {
				this.loading = false
				console.log(error.message);
			})
		}
	}
}
</script>

<style lang="scss">
#projects{
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

</style>
