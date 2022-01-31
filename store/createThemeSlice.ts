import {SetState} from "zustand";

export interface ThemeState {
    dark: boolean;
    toggleMode: () => void;
}

export default function createThemeSlice(set: SetState<ThemeState>) {
    return {
        dark: false,
        toggleMode: () => set(state => ({dark: !state.dark}))
    }
}