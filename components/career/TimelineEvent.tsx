import TimelineSeparator from "./TimelineSeparator";

type Props = {
    name: string;
    period: string;
    place?: string;
};

export default function TimelineEvent({name, period, place}: Props) {
    return (
        <>
            <div className="w-full flex items-start justify-center gap-5">
                <span
                    className="flex-[1] text-amber-700 dark:text-amber-400/90 text-sm text-right font-medium mt-[0.05rem]">
                    {period}
                </span>
                <span className="text-4xl text-slate-500 dark:text-slate-500 leading-4 select-none">·</span>
                <div className="flex-[2] flex flex-col">
                    <span>{name}</span>
                    {place && <span className="text-slate-600 dark:text-slate-400 text-sm">@ {place}</span>}
                </div>
            </div>
            <TimelineSeparator/>
        </>
    )
}