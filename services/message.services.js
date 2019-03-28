import $http from "@/plugins/api.config";

let RESOURCE_NAME = "/leads/set";

export default {
  post(data) {
    try {
      return $http.post(RESOURCE_NAME, data);
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
};