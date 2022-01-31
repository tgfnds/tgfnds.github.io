import {Entry} from "contentful";
import {IProjectFields} from "../../schema/generated/contentful";

export type CMSError = {
    message: string;
}

export type ProjectsResponse = Entry<IProjectFields>[] | CMSError;
