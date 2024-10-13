import { createStore } from "vuex";

const store = createStore({
    state: {
        counter:0,
        randomNumbers: [],
        company: 'Rikkei Academy',
        darkMode: false,
        language: 'vi',
        translations: {
          vi: {
            greeting: 'Xin chào!',
            changeLanguage: 'Chuyển ngôn ngữ',
          },
          en: {
            greeting: 'Hello!',
            changeLanguage: 'Change Language',
          },
        },
        users:[
            {
                id: 1,
                userName: "Gia Bảo",
                gender: "Nam",
                dateOfBirth: "21/08/2005",
                address: "Nghệ An"
            },
            {
                id: 2,
                userName: "Cảnh Hùng",
                gender: "Nam",
                dateOfBirth: "21/08/2005",
                address: "Nghệ An"
            },
        ],
        products: [
            {
                id:1,
                productName: "Cam sành",
                price: 20000,
                quantity: 10
            },
            {
                id:2,
                productName: "Bưởi ba roi",
                price: 50000,
                quantity: 15
            },
        ],
    },
    mutations: {
        increment(state) {
          state.counter ++; 
        },
        decrement(state) {
          state.counter --;  
        },
        addRandomNumber(state, number) {
          state.randomNumbers.push(number);  
        },
        changeCompany(state) {
          state.company = 'RikkeiSoft';
        },
        toggleDarkMode(state) {
          state.darkMode = !state.darkMode;
        },
        setLanguage(state, language) {
          state.language = language;
        },
      },
      actions: {
        increment({ commit }) {
          commit('increment'); 
        },
        decrement({ commit }) {
          commit('decrement'); 
        },
        generateRandomNumber({ commit }) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;  
          commit("addRandomNumber", randomNumber);
        }
      },
      getters: {
        counter: (state) => state.counter, 
        randomNumbers: (state) => state.randomNumbers,
        company: (state) => state.company,
        darkMode: (state) => state.darkMode,
        currentLanguage: (state) => state.language,
        currentTranslations: (state) => state.translations[state.language],
      },
});

export default store;
