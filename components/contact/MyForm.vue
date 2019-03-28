<template>
	<div id="contact" class="mt-40">

		<form v-if="!success" id="form-contact"  class="theme-form contact-form well" v-on:submit.prevent="saveLead()">

			<div class="fields">
				<div class="form-group">
					<span class="form-label">Nombre completo</span>
					<input type="text" class="form-control" placeholder="Ingresa tu nombre real" v-model="message.name" required :disabled="loading">
				</div>
				<div class="form-group">
					<span class="form-label">Correo electrónico</span>
					<input type="email" class="form-control" placeholder="Ingresa una dirección válida" v-model="message.email" required :disabled="loading">
				</div>
				<div class="form-group">
					<span class="form-label">Teléfono</span>
					<input type="text" class="form-control" placeholder="(Opcional)" v-model="message.phone" :disabled="loading">
				</div>
				<div class="form-group">
					<span class="form-label">Asunto</span>
					<select class="form-control" v-model="message.subject" :disabled="loading">
						<option value="0">Selecciona un asunto</option>
						<option value="Ventas">Ventas</option>
						<option value="Cotización">Cotización</option>
						<option value="Soporte">Soporte Técnico</option>
						<option value="Otro">Otro</option>
					</select>
				</div>

				<div class="form-group">
					<span class="form-label">Mensaje</span>
					<textarea class="form-control" placeholder="¿Cuál es tu mensaje?" v-model="message.content" required :disabled="loading"></textarea>
				</div>

				<div class="form-group text-right">
					<button type="submit" class="btn btn-theme btn-lg" :disabled="loading" v-text="loading ? 'Enviando mensaje': 'Enviar mensaje'">Enviar mensaje</button>
				</div>

			</div>

		</form>

		<div v-else  class="well mt-40 pt-40 mb-40 pb-40 mb-0">
			<div class="alert alert-success animated bounceIn mb-0">¡Gracias por Escribirme! Me pondré en contacto muy pronto.</div>
		</div>

		<div v-if="errors" class="well mt-40 pt-40 mb-40 pb-40">
			<div  class="alert alert-danger">Hubo un error, intenta nuevamente</div>
		</div>
	
	</div>
</template>

<script>
import { Message } from '@/components/contact/message.model'
import messageServices from "@/services/message.services";

export default {
  name: "contact",
  data() {
    return {
      loading: false,
      message: new Message(),
      success: false,
      errors: null
    };
  },
  methods: {
    saveLead() {
      this.loading = true
      messageServices.post(this.message).then(response => {
          this.success = true;
          this.loading = false
          this.errors = null;
          this.message = new Message()
        })
        .catch(error => {
          this.loading = false
          this.errors = error.response.data;
          console.log(error.message);
        });
    }
  }
};
</script>
<style scoped>
.mb-0 {
  margin-bottom: 0;
}
</style>
