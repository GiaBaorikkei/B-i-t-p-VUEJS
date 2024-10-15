import { createStore } from "vuex";
import product from "./modules/productList";

const store = createStore({
    modules:{
        product,
    },
});
export default store;