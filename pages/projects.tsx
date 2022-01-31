import type {GetStaticProps} from "next";
import {ProjectList} from "../components/projects/ProjectList";
import Head from "next/head";
import {Entry} from "contentful";
import {IProjectFields} from "../schema/generated/contentful";

interface Props {
    projects: Entry<IProjectFields>[];
    error?: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const baseUrl = process.env.BASE_URL;

        const res = await fetch(`${baseUrl ?? "http://localhost:3000"}/api/projects`);

        const projects: Entry<IProjectFields>[] = await res.json();

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