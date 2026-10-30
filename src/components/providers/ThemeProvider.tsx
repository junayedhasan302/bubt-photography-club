
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("light");

  // Read the theme already applied by the initial HTML script.
  useEffect(() => {
    const currentTheme: Theme =
      document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";

    setThemeState(currentTheme);
  }, []);

  // Update React state, HTML class and Local Storage immediately.
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark",
    );

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);
  }, []);

  // Toggle directly using the currently applied DOM theme.
  const toggleTheme = useCallback(() => {
    const currentlyDark =
      document.documentElement.classList.contains("dark");

    setTheme(currentlyDark ? "light" : "dark");
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for accessing the theme.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
