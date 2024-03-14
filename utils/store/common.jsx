/* eslint-disable consistent-return */
import { create } from 'zustand';

export const commonStore = create((set) => ({
  setLoading: (state) => {
    set({ show: state.show, icon: state.icon });
  },
}));
