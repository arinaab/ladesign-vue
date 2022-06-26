const state = {
    PORTFOLIO_ITEMS: []
}

const getters = {
    GET_PORTFOLIO_ITEMS (state) {
        return state.PORTFOLIO_ITEMS
    },
    GET_FILTERED_PORTFOLIO_ITEMS: state => id => {
        return state.PORTFOLIO_ITEMS.filter(item => item.id == id)
    }
}

const mutations = {
    SET_PORTFOLIO_ITEMS (state, val) {
        state.PORTFOLIO_ITEMS = [...val]
    }
}

export default {
    state,
    getters,
    mutations,
    namespaced: true
}