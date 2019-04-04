import api from "@/services/pages.services";

export const state = () => ({
  loadingPage: false,
  requestErrorCode: 0,
  requestError: '',
  page: {}
})

export const getters = {
  pageInfo(state) {
    return state.page
  },
  loadingPage(state) {
    return state.loadingPage
  }
}

export const mutations = {
  makeRequest(state) {
    state.loadingPage = true;
    state.requestError = ''
    state.requestErrorCode = 0
  },
  requestError(state, {errorCode, errorMessage}) {
    state.loadingPage = false;
    state.requestErrorCode = errorCode
    state.requestError = errorMessage
  },
  setPage(state, page) {
    state.page = page
    state.loadingPage = false
  }
}

export const actions = {
  async getPage({ commit }, routeName) {
    commit('makeRequest');
    try {
        const page = await api.getByRouteName(routeName);
        commit('setPage', page)
        return true
    } catch (e) {
        if (e instanceof RequestError) {
            commit('requestError', {errorCode: e.errorCode, errorMessage: e.message})
        }
        console.log('error: ' + e.message)
        return false
    }
  }
}
