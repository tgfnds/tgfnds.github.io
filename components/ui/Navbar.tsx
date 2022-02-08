import NavLink from "./NavLink";
import Switch from "./Switch";
import Contacts from "../contacts/Contacts";

export default function Navbar() {
    return (
        <nav
            className={`mx-auto mt-2 py-2.5 px-4 flex flex-col items-center bg-indigo-200/90 dark:bg-slate-900/90 rounded-lg`}>
            <h1 className="font-bold text-indigo-400/20 dark:text-indigo-400/20">Navigation</h1>
            <div className="flex items-center gap-4">
                <NavLink href="/" title="Home"/>
                <NavLink href="/projects" title="Projects"/>
                <Switch/>
            </div>
            <div className={"mt-2"}>
                <Contacts/>
            </div>
        </nav>
    );
};