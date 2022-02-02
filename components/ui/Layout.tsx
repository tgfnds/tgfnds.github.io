import type {PropsWithChildren} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <div>
            <div className="fixed bg-blob bg-cover bg-top bg-no-repeat w-screen h-screen -z-1"/>
            <div className="min-h-screen w-screen absolute flex flex-col gap-6">
                <Navbar/>
                <main className="flex-1 w-full mx-auto">
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    );
};