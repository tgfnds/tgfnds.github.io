import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from "../components/ui/Layout";
import {useEffect} from "react";
import {useStore} from "../store/useStore";

export default function MyApp({Component, pageProps}: AppProps) {
    const dark = useStore(state => state.dark);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
