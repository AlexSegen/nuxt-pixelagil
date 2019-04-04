import api from "@/services/pages.services";

export const state = () => ({
  loading: false,
  page: {}
})

export const getters = {
  pageInfo(state) {
    return state.page
  }
}

export const mutations = {
  setPage(state, page) {
    state.page = page
  }
}

export const actions = {
  getPage({commit}, routeName) {
    return api.getByRouteName(routeName).then(page => {
      console.log(page)
      commit('setPage', page)
    })
  }
}
