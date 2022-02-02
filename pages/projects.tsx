import type {GetStaticProps} from "next";
import ProjectList from "../components/projects/ProjectList";
import Head from "next/head";
import {createClient} from "contentful";
import type {Entry} from "contentful";
import type {IProjectFields} from "../schema/generated/contentful";
import type {QueryOptions} from "contentful-management";

interface Props {
    projects: Entry<IProjectFields>[];
    error?: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const spaceId = process.env.CONTENTFUL_SPACE_ID;
        const token = process.env.CONTENTFUL_ACCESS_TOKEN;

        if (!spaceId) throw new Error("Missing CONTENTFUL_SPACE_ID environment variable.");
        if (!token) throw new Error("Missing CONTENTFUL_ACCESS_TOKEN environment variable.");

        const client = createClient({
            space: spaceId,
            accessToken: token
        });

        const entries = await client.getEntries<IProjectFields>({
            content_type: "project"
        } as QueryOptions);

        const projects: Entry<IProjectFields>[] = entries.items;

        return {
            props: {
                projects: projects ?? [],
            }
        }
    } catch (e) {
        return {
            props: {
                projects: [],
                error: (e as Error).message
            }
        }
    }
}

const Projects = ({projects, error}: Props) => {
    if (error) {
        console.error(error);
    }

    return <div className="mx-auto max-w-4xl flex flex-col gap-6">
        <Head>
            <title>Tiago&apos;s Projects</title>
        </Head>
        {<ProjectList projects={projects}/>}
    </div>
}

export default Projects;