const state = {
  windowWidth: null,

  loading: false,
};

const getters = {
  windowWidth: (state) => state.windowWidth,
  loading: (state) => state.loading,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
};
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
