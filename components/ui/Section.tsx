import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from "react";

type Props = PropsWithChildren<{
    id: string;
    title: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>;

export function Section(props: Props) {
    const {id, title, children} = props;

    return (
        <section id={id}
                 className={`p-6 bg-indigo-200 bg-opacity-75 dark:bg-slate-900 dark:bg-opacity-70 flex flex-col rounded ${props.className}`}>
            <a href={`#${id}`} className="mb-5 text-2xl border-b-2 border-slate-500 self-start">
                <span className="text-slate-500 dark:text-slate-500">{"// "}</span>
                {title}
            </a>
            {children}
        </section>
    );
}
