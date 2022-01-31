import {IconBaseProps} from "react-icons";
import {ReactElement} from "react";

type Props = {
    Icon: (props: IconBaseProps) => ReactElement;
    title: string;
    hoverFill: string;
};

export function SkillIcon({Icon, title, hoverFill}: Props) {
    return (
        <div className="relative flex flex-col items-center">
            <Icon size={36} className={`peer transition-all duration-100 ease-out hover:scale-110 ${hoverFill}`}/>
            <div
                className="absolute top-10 bg-slate-700 px-2 py-0.5 opacity-0 peer-hover:opacity-100 z-10 rounded">
                <p className="text-sm text-slate-100 whitespace-nowrap">{title}</p>
            </div>
        </div>
    );
}
