import Link from "next/link";
import {useRouter} from "next/router";

type Props = {
    href: string;
    title: string;
}

export default function NavLink({href, title}: Props) {
    const router = useRouter();

    const style = router.pathname === href
        ? "font-medium border-b-2 border-slate-600/70 hover:text-indigo-500 hover:border-indigo-400 dark:hover:text-indigo-400"
        : "hover:text-indigo-500 dark:hover:text-indigo-400";

    return (
        <Link href={href}>
            <a className={style}>
                {title}
            </a>
        </Link>
    );
};