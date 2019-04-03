import $http from "@/services/api.config";

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