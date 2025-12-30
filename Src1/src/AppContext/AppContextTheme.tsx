import { createContext, type Context, type ReactNode } from "react";

type AppContextThemeObject = {
    backgroundColor: string;
    color: string;
};

const AppLightTheme: AppContextThemeObject = {
    backgroundColor: "white",
    color: "black"
};

const AppDarkTheme: AppContextThemeObject = {
    backgroundColor: "black",
    color: "white"
}


// init dance
export let AppContextThemeComponent: Context<AppContextThemeObject>;
let defaultTheme: AppContextThemeObject;

export function AppContextTheme({ children }: { children: ReactNode }) {
    return (
        <AppContextThemeComponent.Provider value={defaultTheme}>
            {children}
        </AppContextThemeComponent.Provider>
    );
}

export function AppContextThemeNew(theme: string) {
    /*"light" or "dark" */
    const isDefault = theme.toLowerCase() === 'light';
    AppContextThemeComponent = createContext(isDefault ? AppLightTheme : AppDarkTheme);
    defaultTheme = isDefault ? AppLightTheme : AppDarkTheme;
}