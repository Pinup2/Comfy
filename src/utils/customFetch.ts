import axios from "axios";

//creating custom instance, so not to  use axios.get/post
const productionURL = "https://strapi-store-server.onrender.com/api";
export const customFetch = axios.create({ baseURL: productionURL });

// with custom instance we can skip on providing the full link
// customFetch.get('/productiosm')
