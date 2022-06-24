const state = {
    MODALFORM: false,
    MODALTHANKS: false,
    OVERLAY: false
}

const getters = {
    GET_MODALFORM_STATE (state) {
        return state.MODALFORM
    },
    GET_MODALTHANKS_STATE (state) {
        return state.MODALTHANKS
    },
    GET_OVERLAY_STATE (state) {
        return state.OVERLAY
    }
}

const mutations = {
    SET_MODALFORM_STATE (state, val) {
        state.MODALFORM = val
    },
    SET_MODALTHANKS_STATE (state, val) {
        state.MODALTHANKS = val
    },
    SET_OVERLAY_STATE (state) {
        return state.OVERLAY = !state.OVERLAY
    }
}

export default {
    state,
    getters,
    mutations,
    namespaced: true
}