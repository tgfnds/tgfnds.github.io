import {BiLinkExternal} from "react-icons/bi";

type Props = {
    url: string;
    text: string;
}

const ExternalLink = ({url, text}: Props) => {
    return (
        <a href={url} target="_blank" className="group flex items-center gap-2" rel="noreferrer">
            <BiLinkExternal size={16} className="group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 mb-0.5"/>
            <span className="group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                {text}
            </span>
        </a>
    );
};

export default ExternalLink;