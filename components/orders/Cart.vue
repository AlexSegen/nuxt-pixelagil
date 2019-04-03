<template>
  <form class="pmd-card pt-20" id="order" v-on:submit.prevent="checkout">
    <div class="proloader" v-show="checkoutStatus == 'loading'">
      <div class="looping-rhombuses-spinner">
        <div class="rhombus"></div>
        <div class="rhombus"></div>
        <div class="rhombus"></div>
      </div>
    </div>

    <div class="order-form" v-show="checkoutStatus != 'loading'">
      <div class="alert alert-info animated bounceIn" v-if="checkoutStatus == 'success'">
        <strong>¡Solicitud enviada!</strong>
        <br>Estaré contactándote muy pronto.
      </div>
      <div class="form-group">
        <label for="name" class="control-label">Nombre real</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Tu nombre y apellido"
            required
            v-model="buyer.name"
          >
          <span class="input-group-addon">
            <i class="fa fa-user text-theme"></i>
          </span>
        </div>
      </div>

      <div class="form-group">
        <label for="name" class="control-label">Teléfono (opcional)</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Teléfono de contacto"
            v-model="buyer.phone"
          >
          <span class="input-group-addon">
            <i class="fa fa-user text-theme"></i>
          </span>
        </div>
      </div>

      <div class="form-group">
        <label for="name" class="control-label">Correo electrónico</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Ingresa una dirección válida"
            required
            v-model="buyer.email"
          >
          <span class="input-group-addon">
            <i class="fa fa-envelope text-theme"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="table-responsive" v-show="checkoutStatus != 'loading'">
      <table class="table pmd-table table-hover order-table">
        <thead>
          <tr>
            <th>Descripción</th>
            <th class="hidden-xs">Cant.</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cartItems.length < 1">
            <tr>
              <td colspan="3">Selecciona un servicio</td>
            </tr>
          </template>

          <template v-else>
            <tr v-for="(product, indexCart) in cartItems" :key="indexCart + '_cartkey'" class="animated fadeIn">
              <td>{{ product.name }}</td>
              <td class="hidden-xs">{{ product.quantity }}</td>
              <td>
                <button @click="removeProduct(product)" class="btn btn-xs btn-link" type="button">
                  <i class="fa fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div class="pmd-card-title text-right hide">
      <h2 class="pmd-card-title-text total-price">USD {{ total }}</h2>
      <span class="pmd-card-subtitle-text">Total a pagar</span>
    </div>

    <div class="btn-group" v-show="cartItems.length > 0 && checkoutStatus != 'loading'">
      <button @click="emptyCart" class="btn btn-link" type="button">Vaciar</button>
      <button type="submit" class="btn btn-theme">Cotizar</button>
    </div>

    <p class="text-center mt-20">Si tienes alguna duda, por favor
      <router-link :to="{ name: 'contact' }">escríbeme</router-link>
    </p>
  </form>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    name: 'cart',
    data() {
      return {
        buyer : {}
      }
    },
    computed: {
      ...mapGetters('cart', {
        cartItems: 'cartProducts',
        total: 'cartTotal',
        //buyer: 'buyer',
        checkoutStatus: 'checkoutStatus'
    }),
      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },
    methods: {
        ...mapActions('cart', ['checkout','emptyCart', 'removeProduct'])
    }
}
</script>
<style scoped>
.proloader {
      display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
}
</style>

