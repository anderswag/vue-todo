import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10000)
}

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    addItem (state, item) {
      if (!item) { return }
      state.items.push({id: getRandomNumber(),name: item, isComplete: false})
    },
    deleteItem (state, itemId) {
      const filteredItems = state.items.filter((item) => item.id != itemId)
      state.items = filteredItems
    },
    checkItem (state, itemId) {
      const itemIndex = state.items.findIndex((item) => item.id === itemId)
      state.items[itemIndex].isComplete = !state.items[itemIndex].isComplete
    }
  },
  actions: {
    addItem (context, item) {
      context.commit('addItem', item)
    },
    deleteItem (context, itemId) {
      context.commit('deleteItem', itemId)
    },
    checkItem (context, itemId) {
      context.commit('checkItem', itemId)
    }
  }
});
