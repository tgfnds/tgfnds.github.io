import {FaHeart} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="mt-4 py-2 font-bold text-[0.8rem] flex gap-2 items-center justify-center">
            <span className="text-slate-500 dark:text-slate-500">Made with </span>
            <FaHeart className="fill-red-600/75"/>
            <span className="text-slate-500 dark:text-slate-500"> by Tiago Fernandes</span>
        </footer>
    );
};