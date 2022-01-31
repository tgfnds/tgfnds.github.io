import Link from "next/link";
import Image from "next/image";
import {Tag} from "../ui/Tag";
import {ScrollableTagContainer} from "./ScrollableTagContainer";
import {BiLinkExternal} from "react-icons/bi";
import {SiGithub} from "react-icons/si";
import {IProjectFields} from "../../schema/generated/contentful";

type Props = {
    fields: IProjectFields;
};

export function SingleProject({fields}: Props) {
    const {name, description, slug, tags, image, url, repo} = fields;
    const imageUrl = image?.fields.file.url;
    const imageAlt = image?.fields.title;
    const imageWidth = image?.fields.file.details.image?.width;
    const imageHeight = image?.fields.file.details.image?.height;

    return (
        <section id={slug}>
            <div className="m-3 flex flex-col sm:flex-row gap-2 bg-indigo-200 dark:bg-slate-900 rounded-xl">
                <div className="flex sm:w-1/2">
                    <Image className="object-cover object-top rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
                           src={`https:${imageUrl}`} alt={imageAlt} width={imageWidth} height={imageHeight}/>
                </div>
                <div className="sm:w-1/2 p-4 sm:mt-1 mb-3 flex flex-col gap-3">
                    <a href={`#${slug}`} className="self-start">
                        <h1 className="font-bold text-2xl border-b-2 border-slate-500 mb-1">
                            <span className="text-slate-500 dark:text-slate-500">{`// `}</span>
                            <span>{name}</span>
                        </h1>
                    </a>
                    {tags && <ScrollableTagContainer>
                        {tags.map(({fields: {name}}) => (
                            <Tag key={name} name={name}/>
                        ))}
                    </ScrollableTagContainer>}
                    <p className="mt-1">{description}</p>
                    {(url || repo) && (
                        <div className="flex justify-evenly text-sm mt-2 sm:mt-auto">
                            {url && (
                                <Link href={url}>
                                    <a className="group flex items-center gap-2">
                                        <BiLinkExternal size={16}
                                                        className="group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400"/>
                                        <span className="group-hover:text-indigo-500 dark:group-hover:text-indigo-400">Check it out</span>
                                    </a>
                                </Link>
                            )}
                            {repo && (
                                <Link href={repo}>
                                    <a className="flex items-center gap-2">
                                        <SiGithub size={16}/>
                                        <span>Check the code</span>
                                    </a>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}