import useThemeToggle from "../context/ThemeContext";

export default function ToggleButton() {
    const { toggleTheme} = useThemeToggle();

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value="dark"
                className="sr-only peer ring-slate-100"
                onChange={()=>toggleTheme()}
            />
            <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-slate-300">Toggle Theme</span>
        </label>
    );
}

