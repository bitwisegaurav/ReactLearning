import { useEffect, useState, useCallback } from "react"
import Card from "./components/Card"
import ToggleButton from "./components/ToggleButton"
import { ThemeToggleProvider } from "./context/ThemeContext"

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-300 dark:bg-slate-700">
      <div className="flex flex-col items-end gap-4">
        <ThemeToggleProvider value={{ theme, toggleTheme }}>
          <ToggleButton />
          <Card />
        </ThemeToggleProvider>
      </div>
    </div>
  );
}

export default App
