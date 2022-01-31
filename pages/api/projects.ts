import type {NextApiRequest, NextApiResponse} from "next";
import {createClient} from "contentful";
import {IProjectFields} from "../../schema/generated/contentful";
import {QueryOptions} from "contentful-management";
import {ProjectsResponse} from "./types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ProjectsResponse>) {
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

        res.status(200).json(entries.items);
    } catch (e) {
        res.status(500).json({message: `Failed to fetch projects. ${(e as Error).message}`});
    }
}