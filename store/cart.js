import api from "@/services/order.services";

export const state = () => ({
    // {id, quantity}
    buyer:{
      name: '',
      email: '',
      phone: ''
    },
    items: [],
    checkoutStatus: null
})

export const getters = {
    buyer(state){
      return state.buyer
    },
    cartProducts (state, getters, rootState, rootGetters) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(product => product.id === cartItem.id)
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          inventory: product.inventory,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },
  }

  export const mutations = {
    pushProductToCart (state, product) {
      state.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    },
    deleteItem(state, cartItem){
      state.items.splice(state.items.findIndex(item => item.id == cartItem.id), 1);
    },
    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },
    decrementItemQuantity (state, cartItem) {
      cartItem.quantity--
    },
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },

    emptyCart (state) {
      state.items = []
    }
  }

  export const actions = {
    addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        
        const cartItem = state.items.find(item => item.id === product.id)

        !cartItem ? commit('pushProductToCart', product) : commit('incrementItemQuantity', cartItem)
        
        commit('products/decrementProductInventory', product, {root: true})
      }
    },
    removeProduct({state, getters, commit, rootState, rootGetters}, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        const cartItem = state.items.find(item => item.id === product.id)

        if(cartItem.quantity == 1 ) commit('deleteItem', cartItem) 

        commit('decrementItemQuantity', cartItem)       
        commit('products/incrementProductInventory', product, {root: true})
      }
    },
    emptyCart({commit}) {
      commit('emptyCart')
    },
    checkout({state,getters, commit}) {
      commit('setCheckoutStatus', 'loading')
      let data = {
        buyer: state.buyer,
        cartItems: state.items,
        cartTotal: getters.cartTotal,
        notify: true //Notificar por email
      }
      api.post(data).then(response => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
      });
    }
  }
