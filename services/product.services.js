import $http from "@/plugins/api.config";

let RESOURCE_NAME = "products/get";

export default {
  get() {
    try {
      return $http.get(RESOURCE_NAME);
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
};