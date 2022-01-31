import NavLink from "./NavLink";
import Switch from "./Switch";

export default function Navbar() {
    return (
        <nav
            className={`sticky py-2 flex flex-col items-center bg-indigo-200 dark:bg-slate-900 shadow-md shadow-indigo-300/50 dark:shadow-slate-900/75`}>
            <h1 className="font-bold text-indigo-400/20 dark:text-indigo-300/25">Navigation</h1>
            <div className="flex gap-4">
                <NavLink href="/" title="Home"/>
                <NavLink href="/projects" title="Projects"/>
            </div>
            <Switch/>
        </nav>
    );
};