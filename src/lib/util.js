/**
 * @fileoverview Helper utilities for the site.
 * @author Nicholas C. Zakas
 */
/*global fetch*/

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import yaml from "js-yaml";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";
import fs from "fs/promises";

//-----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, "../data");

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

export async function loadBlogPostsX(posts) {

    return posts.map(post => {

        const filename = path.basename(post.file, ".md");
        const urlParts = {
            year: filename.slice(0, 4),
            month: filename.slice(5, 7),
            slug: filename.slice(11)
        };

        const newPost = Object.create(post, {
            url: { value: `/blog/${urlParts.year}/${urlParts.month}/${urlParts.slug}/` }
        });

        newPost.urlParts = urlParts;
        newPost.frontmatter.date = new Date(filename.slice(0, 10));
        newPost.frontmatter.pubDate = newPost.frontmatter.date;
        return newPost;
    });

}

export async function loadBlogPosts() {

    const postFiles = await import.meta.glob("../pages/_posts/**/*.md");
    const posts = await Promise.all(Object.values(postFiles).map(async (getInfo) => {
        const meta = await getInfo();
        return meta;
    }));

    return posts.map(post => {

        const filename = path.basename(post.file, ".md");
        const urlParts = {
            year: filename.slice(0, 4),
            month: filename.slice(5, 7),
            slug: filename.slice(11)
        };

        const newPost = Object.create(post, {
            url: { value: `/blog/${urlParts.year}/${urlParts.month}/${urlParts.slug}/` }
        });

        newPost.urlParts = urlParts;
        newPost.frontmatter.date = new Date(filename.slice(0, 10));
        newPost.frontmatter.pubDate = newPost.frontmatter.date;
        return newPost;
    });

}
