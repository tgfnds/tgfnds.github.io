// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IProjectFields {
  /** name */
  name: string;

  /** slug */
  slug: string;

  /** description */
  description?: string | undefined;

  /** image */
  image?: Asset | undefined;

  /** url */
  url?: string | undefined;

  /** repo */
  repo?: string | undefined;

  /** tags */
  tags?: ITag[] | undefined;
}

/** Defines a project schema. */

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITagFields {
  /** name */
  name: string;
}

/** Tag that identifies tech or something else related to a project. */

export interface ITag extends Entry<ITagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "tag";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "project" | "tag";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";