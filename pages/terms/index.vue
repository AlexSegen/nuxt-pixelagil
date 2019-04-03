<template>
	<div class="terminos">

		<hero-section :heroTitle="heroTitle" :heroSubtitle="heroSubtitle"/>

		<section>
			<div class="container">
				<article class="well page-content pt-40">

					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-justify">
                            <p><img src="@/assets/img/logo-pixelagil.png" class="img-responsive center-block" alt=""></p>
                            <hr>


							<p>
								Al comprar en {{ APP_NAME }} usted acepta y está obligado a aceptar todos los términos y condiciones de esta página. {{ APP_NAME }} se reservam el derecho de cambiar estos términos y condiciones en cualquier momento sin notificación y para que puedan tener efecto inmediato, aunque normalmente se da a los usuarios registrados 30 días de aviso.
							</p>

							<h3 class="mb-10 mt-40 text-theme02">
								Notificación especial
							</h3>
							<p>
								Debido a la naturaleza de los negocios que opera {{ APP_NAME }}, los términos de servicio adicionales pueden establecerse caso por caso. Cualquier término adicional le será proporcionado por {{ APP_NAME }} antes de que se tome el pago. Si tiene alguna pregunta, por favor <router-link to="/contacto">contácte aquí</router-link>.
							</p>

							<h3 class="bold section-title mb-10">
								Términos de Servicio
							</h3>
							<p>
								Después de hacer una compra con {{ APP_NAME }}, usted no puede distribuir o revender el trabajo sin un permiso escrito. En los servicios de diseño web, diseño gráfico e integraciones, se incluirán créditos visibles en el pie de página que no deben ser editados / alterados de ninguna manera. Si desea eliminar estos créditos, se cobrará una tarifa única de <strong>20USD.</strong>
							</p>

							<h3 class="bold section-title mb-10">Términos de Pagos</h3>
							<p>
								Se requiere un pago por adelantado antes de comenzar el trabajo de un proyecto. El valor de ese pago inicial depende del valor total del proyecto. Para un proyecto bajo el valor de 50USD, el pago completo debe ser dado por adelantado. Para proyectos por encima de este valor, se requiere un mínimo del 50% para ser pagado antes de que el trabajo comience. Los pagos se realizan a través de PayPal, Payoneer o Uphold. Los pagos de PayPal deben ser realizados a través de <strong> alejandrojv17@gmail.com</strong>. Si los clientes no pagan las facturas que se deben a {{ APP_NAME }}, se calcelarán todas las tareas requeridas, o se podrá eliminar, reutilizar y/o revender el material en otros trabajos.
							</p>

							<h3 class="bold section-title mb-10">Cancelaciones</h3>

							<p>
								{{ APP_NAME }} se reserva el derecho de cobrar un 10% de gastos de administración (hasta USD 100.00) por cualquier falta de pago / cancelación en los pedidos que se hayan realizado y facturado a un cliente. Por lo tanto, se sugiere que todos los clientes estén seguros de que los servicios son adecuados para ellos antes de realizar el pedido. {{ APP_NAME }} también reportará a los clientes que cancelan o no pagan órdenes a Fraud Record.
							</p>
							<h3 class="bold section-title mb-10">Garantía de Satisfacción</h3>

							<p>
								La garantía de satisfacción cubre todos los pedidos, esto significa que {{ APP_NAME }} está haciendo todo el esfuerzo, de buena fe, para asegurar la satisfacción de sus clientes. Es el deber del cliente proveer un feedback significativo, constructivo y preciso para asi poder proveerle resultados satisfactorios.
							</p>


							<h3 class="bold section-title mb-10">
								Términos de Reembolso
							</h3>

							<p>
								Debido a la naturaleza de los servicios que {{ APP_NAME }} ofrece (intangibles), no es posible proporcionar un reembolso en ninguno de los servicios. Por favor, póngase en contacto a través de {{ APP_EMAIL }} si no está satisfecho con la calidad del trabajo que se le ha proporcionado y se hará todo lo posible para ayudarle.
							</p>
							<p>
								Para {{ APP_NAME }} es importante dejar en claro que los bienes digitales están representados por inversion de tiempo y experiencia, con lo cual por su naturaleza no pueden ser devueltos, dicho esto, todos los pagos son finales y no tienen refound (devolución). Sin embargo, bajo la garantía de safistacción de {{ APP_NAME }}, si no se llega a una resolución satisfactoria en su proyecto, incluso con su retroalimentación adecuada y participación, se podrá aplicar el monto hacia otro proyecto. Estos casos son raros ya que ambas partes están interesadas en obtener un resultado satisfactorio.
							</p>

							<p>
								Al pagar por un servicio, {{ APP_NAME }} asume que usted entiende completamente y acepta sus Términos de Reembolso. Por favor, <a href="/contacto">escríba</a> antes de crear una nueva orden si necesita aclarar alguna duda.
							</p>


							<hr>
							<p class="text-muted text-right">Última actualización: 16 Sept, 2017</p>

						</div>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>

<script>
import config from '@/config'
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
	}
}
</script>