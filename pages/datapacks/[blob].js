import fs from "fs";
import path from 'path';
import React from "react";
export default (props) => {
    return <div>{JSON.stringify(props)}</div>
}

export async function getStaticPaths() {
    const res = {
        paths: [

        ],
        fallback: false
    }
    const files = await fs.promises.readdir(path.join(process.cwd(), "./data/datapacks"));
    for (let file of files) {
        const data = JSON.parse(await fs.promises.readFile(path.join(process.cwd(), "./data/datapacks", file), "utf-8"));
        res.paths.push(
            { params: { blob: data.blob } });
    }
    return res;
}

export async function getStaticProps(context) {

    const data = JSON.parse(await fs.promises.readFile(path.join(process.cwd(), "./data/datapacks", context.params.blob + ".json"), "utf-8"));
    return { props: data }
}