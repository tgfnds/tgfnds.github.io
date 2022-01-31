import React, {PropsWithChildren} from 'react';
import {BiRightArrowAlt} from "react-icons/bi";
import Link from "next/link";

function LinkButton({children}: PropsWithChildren<{}>) {
    return (
        <Link href="/projects">
            <a className="bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-300 rounded-lg px-4 py-2 self-end flex items-center">
                <span className="text-slate-100 dark:text-slate-800">{children}</span>
                <BiRightArrowAlt size={22} className="fill-slate-200 dark:fill-slate-700"/>
            </a>
        </Link>
    );
}

export default LinkButton;
