import $http from "@/services/api.config";

let RESOURCE_NAME_ALL = "pages/get";
let RESOURCE_NAME_ROUTE = "pages/route";

export default {
  async get() {
    try {
      let response = await $http.get(RESOURCE_NAME_ALL);
      let data = await response.data;
      return data
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  },
  async getByRouteName(routeName) {
    try {
      let response = await $http.get(`${RESOURCE_NAME_ROUTE}/${routeName}`);
      let data = await response.data;
      return data.page
    } catch (error) {
      if(error.response.status == 404) {
        return false
      }
      //console.log(`Error: ${error.message}`)
    }
  }
};