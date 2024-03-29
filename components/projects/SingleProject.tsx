import Image from "next/image";
import Tag from "../ui/Tag";
import ScrollableTagContainer from "./ScrollableTagContainer";
import {IProjectFields} from "../../schema/generated/contentful";
import ExternalLink from "../ui/ExternalLink";

type Props = {
    fields: IProjectFields;
};

const customLoader = ({src}: { src: string }) => src;

export default function SingleProject({fields}: Props) {
    const {name, description, slug, tags, image, url, repo} = fields;
    const imageUrl = image?.fields.file.url;
    const imageAlt = image?.fields.title;
    const imageWidth = image?.fields.file.details.image?.width;
    const imageHeight = image?.fields.file.details.image?.height;

    return (
        <section id={slug}>
            <div className="m-2 flex flex-col sm:flex-row gap-2 bg-indigo-200 dark:bg-slate-900 rounded-xl">
                <div className="flex sm:w-1/2">
                    <Image className="object-cover object-top rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                           src={`https:${imageUrl}`} alt={imageAlt} width={imageWidth} height={imageHeight}
                           layout="intrinsic" unoptimized loader={customLoader}/>
                </div>
                <div className="sm:w-1/2 p-4 sm:mt-1 mb-3 flex flex-col gap-2">
                    <a href={`#${slug}`} className="self-start">
                        <h1 className="italic font-bold text-2xl border-b-2 border-slate-500 mb-1">
                            <span className="text-slate-500 dark:text-slate-500">{`// `}</span>
                            <span className="font-medium">{name}</span>
                        </h1>
                    </a>
                    {tags && <ScrollableTagContainer>
                        {tags.map(({fields: {name}}) => (
                            <Tag key={name} name={name}/>
                        ))}
                    </ScrollableTagContainer>}
                    <p className="mt-1">{description}</p>
                    {(url || repo) && (
                        <div className="flex justify-evenly text-sm mt-6 sm:mt-auto">
                            {url && <ExternalLink url={url} text="Check it out"/>}
                            {repo && <ExternalLink url={repo} text="Check the code"/>}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}