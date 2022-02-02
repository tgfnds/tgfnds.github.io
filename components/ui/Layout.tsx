import {PropsWithChildren} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <div
            className="bg-indigo-100 bg-blob bg-fixed bg-cover min-h-screen flex flex-col gap-6">
            <Navbar/>
            <main className="flex-1 w-full mx-auto">
                {children}
            </main>
            <Footer/>
        </div>
    );
};