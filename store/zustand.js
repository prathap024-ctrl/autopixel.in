import { create } from "zustand";

const useStore = create((set) => ({
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
}));

export default useStore;