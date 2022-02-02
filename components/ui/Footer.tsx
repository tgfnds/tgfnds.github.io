import {FaHeart} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="flex flex-col items-center mt-6 pb-2 pt-8 font-medium text-[0.8rem] gap-1 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent">
            <div className="flex flex-wrap gap-x-1 items-center justify-center">
                <span className="text-slate-200">
                    Made with
                </span>
                <FaHeart className="fill-red-600/90"/>
                <span className="text-slate-200">
                    using NextJS, TailwindCSS & Contentful
                </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
                <span className="text-slate-200 font-bold mr-1">

                </span>
                <span className="text-slate-200">
                    <span className="text-slate-200 font-bold">&copy; </span>2022 Tiago Fernandes
                </span>
                <span className="hidden sm:flex sm:mx-1 text-slate-200">
                    -
                </span>
                <span className="text-slate-200">
                    All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};