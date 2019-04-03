import api from "@/services/product.services";

export const state = () => ({
    items: []
  })

  export const getters = {
    availableProducts (state, getters) {
      return state.items.filter(product => product.inventory > 0)
    },

    productIsInStock () {
      return (product) => {
        return product.inventory > 0
      }
    },
    webCategory (state) {
      return state.items.filter(filter  => filter.category == 'web')
    },
    otherCategory (state) {
      return state.items.filter(filter  => filter.category == 'otro')
    },
    designCategory (state) {
      return state.items.filter(filter  => filter.category == 'grafico')
    },
    integrationCategory (state) {
      return state.items.filter(filter  => filter.category == 'integraciones')
    }
  }

  export const mutations = {
    setProducts (state, products) {
      // update products
      state.items = products
    },
    incrementProductInventory (state, product) {
      product.inventory++
    },
    decrementProductInventory (state, product) {
      product.inventory--
    }
  }

  export const actions = {
    fetchProducts({commit}) {
      return api.get().then(response => {
        commit('setProducts', response.data.products)
      })
    }
  }