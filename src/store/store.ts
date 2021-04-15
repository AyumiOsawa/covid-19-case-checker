import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import fetchData from "@/api";

const store = createStore<State>({
  state() {
    return {
      countryData: {},
    };
  },
  mutations: {
    setData() {
      const newData = fetchData();
      state.countryData({
        ...state.countryData,
        ...newData,
      });
    },
  },
});

interface Country {
  [countryName: string]: {
    All?: {
      confirmed: number;
      lat: number;
      long: number;
    };
  };
}

export interface State {
  countryData: Array<Country> | Record<string, never>;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export default store;
export const state = store.state;
