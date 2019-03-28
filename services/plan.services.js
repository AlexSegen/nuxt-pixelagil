import $http from "@/plugins/api.config";

let RESOURCE_NAME = "plans.json";

export default {
  get() {
    return $http.get(process.env.VUE_APP_DATABASE_URL + RESOURCE_NAME, {
      params: {
        auth: process.env.VUE_APP_APIKEY
      }
    });
  }
};
