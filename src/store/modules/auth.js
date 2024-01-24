export default {
    state() {
        return {
            key: '',
            statusAuth: false
        }
    },
    mutations: {
        setKey(state, key) {
            state.key = key
            console.log(`ключ в сторе: ${state.key}`)
        },
        setStatusAuth(state, status) {
            state.statusAuth = status
            console.log(`Авторизация - ${state.statusAuth}`)
        }
    },
    actions: {
        getKey({ commit }, key) {
            if(key !== '') {
                commit('setKey', key)
            } else alert("Введите корректный ключ!")
        },
        getStatusAuth({ commit }, status) {
            if(status === 200) {
                commit('setStatusAuth', true)
            } else commit('setStatusAuth', false)
        }
    },
    getters: {}
}