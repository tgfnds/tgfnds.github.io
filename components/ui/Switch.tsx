import {MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md"
import {useTheme} from "next-themes";
import {ReactElement, useEffect, useState} from "react";

const ICON_COLOR = "#e2e8f0";
const ICON_SIZE = 18;

export default function Switch() {
    const {theme, setTheme, systemTheme} = useTheme();
    const [icon, setIcon] = useState<ReactElement | null>(null);

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        setIcon((theme === "light" || systemTheme === "light") ?
            <MdOutlineLightMode fill={ICON_COLOR} size={ICON_SIZE}/> :
            <MdOutlineDarkMode fill={ICON_COLOR} size={ICON_SIZE}/>)
    }, [systemTheme, theme]);

    return (
        <button
            className="group w-10 h-5 rounded-full cursor-pointer bg-indigo-300 dark:bg-slate-800"
            onClick={toggleTheme}>
            <div
                className="w-1/2 h-full rounded-full mr-auto bg-indigo-400 group-hover:bg-indigo-400/50 dark:translate-x-6 transition-all flex items-center justify-center">
                {icon}
            </div>
        </button>
    );
}