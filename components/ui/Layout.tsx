import {PropsWithChildren} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <div
            className="bg-indigo-100 bg-fixed bg-blob bg-cover dark:bg-slate-900 min-h-screen h-100 flex flex-col relative gap-6">
            <Navbar/>
            <main className="flex-1 w-full mx-auto">
                {children}
            </main>
            <Footer/>
        </div>
    );
};