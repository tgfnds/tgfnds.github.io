import {useStore} from "../../store/useStore";
import {MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md"

const ICON_COLOR = "#e2e8f0";
const ICON_SIZE = 18;

export default function Switch() {
    const dark = useStore(state => state.dark);
    const toggleMode = useStore(state => state.toggleMode);

    return (
        <button
            className="group w-10 h-5 rounded-full cursor-pointer bg-indigo-300 dark:bg-slate-800"
            onClick={() => toggleMode()}>
            <div
                className="w-1/2 h-full rounded-full mr-auto bg-indigo-400 group-hover:bg-indigo-400/50 dark:translate-x-6 transition-all flex items-center justify-center">
                {!dark && <MdOutlineLightMode fill={ICON_COLOR} size={ICON_SIZE}/>}
                {dark && <MdOutlineDarkMode fill={ICON_COLOR} size={ICON_SIZE}/>}
            </div>
        </button>
    );
}