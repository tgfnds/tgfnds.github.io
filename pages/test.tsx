import {FaArrowDown, FaArrowUp} from "react-icons/fa"
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

type SectionProps = {
    id: string;
    topHref?: string;
    bottomHref?: string;
    topLabel?: string;
    bottomLabel?: string;
    children?: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Section = ({id, topHref, bottomHref, topLabel, bottomLabel, children, className}: SectionProps) => {
    return (
        <section id={id} className={`h-screen relative ${className}`}>
            {children}
            <a href={topHref}
               className="absolute right-2 bottom-2 flex flex-col items-center opacity-70 hover:opacity-100">
                <p className="upright uppercase mb-2">{topLabel}</p>
                <FaArrowUp size={28}/>
            </a>
            <a href={bottomHref}
               className="absolute right-2 bottom-2 flex flex-col items-center opacity-70 hover:opacity-100">
                <p className="upright uppercase mb-2">{bottomLabel}</p>
                <FaArrowDown size={28}/>
            </a>
        </section>
    )
}

const Test = () => {
    return (
        <div>
            <section id="intro" className="h-screen bg-primary-300 relative">

                <a href="#skills"
                   className="absolute right-2 bottom-2 flex flex-col items-center opacity-70 hover:opacity-100">
                    <p className="upright uppercase mb-2"> Skills</p>
                    <FaArrowDown size={28}/>
                </a>
            </section>
            <section id="skills" className="h-screen bg-primary-400 relative">

                <a href="#intro"
                   className="absolute top-2 right-2 flex flex-col items-center opacity-70 hover:opacity-100">
                    <FaArrowUp size={28}/>
                    <p className="upright uppercase mt-2">Intro</p>
                </a>
                <a className="absolute right-2 bottom-2 flex flex-col items-center opacity-70 hover:opacity-100">
                    <p className="upright uppercase mb-2">Projects</p>
                    <FaArrowDown size={28}/>
                </a>
            </section>
        </div>
    )
        ;
};

export default Test;