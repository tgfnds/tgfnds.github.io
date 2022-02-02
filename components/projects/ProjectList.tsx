import SingleProject from "./SingleProject";
import type {IProjectFields} from "../../schema/generated/contentful";
import type {Entry} from "contentful";

type Props = {
    projects: Entry<IProjectFields>[];
};

export default function ProjectList({projects}: Props) {
    return (
        <div>
            {!projects && <div>No projects found.</div>}
            {projects && (
                <ul>
                    {projects.map((project) => <SingleProject key={project.fields.slug} fields={project.fields} />)}
                </ul>
            )}
        </div>
    );
}