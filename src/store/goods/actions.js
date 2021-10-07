import { api } from "src/boot/axios"

export function fetchGoods ({ commit }) {
  commit('SET_LOADING', true);
  return api.get('/api/service?Request=Stores&Language=en-us')
    .then(response => {
      if (response.status !== 200) {
        throw ('Error');
      }
      commit('SET_GOODS', response.data);

    }).catch((error) => alert('Error Request'))
    .finally(() => commit('SET_LOADING', false))
}
