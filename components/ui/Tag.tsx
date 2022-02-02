type Props = {
    name: string;
};

export default function Tag({name}: Props) {
    return (
        <p className="snap-start rounded-full bg-indigo-300/60 dark:bg-slate-800/75 py-1 px-2 text-xs font-medium">
            {name}
        </p>
    )
};
