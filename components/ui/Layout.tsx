import {PropsWithChildren} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <div
            className="bg-indigo-100 bg-hero-pattern dark:bg-slate-900 dark:bg-dark-hero-pattern min-h-screen h-100 flex flex-col relative">
            <Navbar/>
            <main className="flex-1 my-6 w-full mx-auto">
                {children}
            </main>
            <Footer/>
        </div>
    );
};