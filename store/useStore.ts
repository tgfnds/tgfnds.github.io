import create from "zustand";
import createThemeSlice, {ThemeState} from "./createThemeSlice";

type AppState = ThemeState;

export const useStore = create<AppState>((set) => ({
    ...createThemeSlice(set),
}));