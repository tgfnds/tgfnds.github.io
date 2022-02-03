import create from "zustand";

type AppState = {};

export const useStore = create<AppState>((set) => ({}));