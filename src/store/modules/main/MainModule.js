const state = {
    MODALFORM: false,
    MODALTHANKS: false
}

const getters = {
    GET_MODALFORM_STATE (state) {
        return state.MODALFORM
    },
    GET_MODALTHANKS_STATE (state) {
        return state.MODALTHANKS
    }
}

const mutations = {
    SET_MODALFORM_STATE (state, val) {
        state.MODALFORM = val
    },
    SET_MODALTHANKS_STATE (state, val) {
        state.MODALTHANKS = val
    }
}

export default {
    state,
    getters,
    mutations,
    namespaced: true
}