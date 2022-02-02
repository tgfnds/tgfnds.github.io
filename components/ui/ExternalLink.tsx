import {BiLinkExternal} from "react-icons/bi";
import Link from "next/link";

type Props = {
    url: string;
    text: string;
}

const ExternalLink = ({url, text}: Props) => {
    return (
        <Link href={url}>
            <a target="_blank" className="group flex items-center gap-2">
                <BiLinkExternal size={16}
                                className="group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 mb-0.5"/>
                <span className="group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                    {text}
                </span>
            </a>
        </Link>
    );
};

export default ExternalLink;