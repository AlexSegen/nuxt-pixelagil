import $http from "@/services/api.config";

let RESOURCE_NAME = "pages/route/";

export default {
  async getByRouteName(routeName) {
    try {
      let response = await $http.get(`${RESOURCE_NAME}/${routeName}`);
      console.log(response)
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
};