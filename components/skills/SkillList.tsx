import {PropsWithChildren} from "react";

type Props = {
    title: string;
};

export default function SkillList({title, children}: PropsWithChildren<Props>) {
    return (
        <div
            className="sm:w-48 rounded-lg bg-indigo-100/60 dark:bg-slate-800/50 rounded-xl py-6 px-4 flex flex-col items-center">
            <h1 className="text-lg text-slate-600 border-b-2 border-indigo-400/50 mb-6">{title}</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {children}
            </div>
        </div>
    )
}