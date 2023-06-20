import { createContext } from "react";

export const DarkmodeContext = createContext(
    {
        setDarkModeToggle: () => {},
        darkModeToggle: false
    }
);