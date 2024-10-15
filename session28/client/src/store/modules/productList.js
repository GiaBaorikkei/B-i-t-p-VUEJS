import { getAllProduct } from "@/api/productApi";
const product = {
    state: {
        products: []
    },
    mutations: {
        getAllProduct:(state, payload) => {
            console.log(11, payload);
        }
    },
    actions: {
        getAllProduct: async ({ commit }) => {
            const data = await getAllProduct();
            commit("getAllProduct", data)
        }
    }
}
export default product;