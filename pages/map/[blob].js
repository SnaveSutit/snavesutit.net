import fs from "fs";
import path from 'path';
import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import { Grid, Dropdown, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { Viewer } from "../../components/Viewer";

function Slides({ assets }) {
    return (
        <div>
            <Viewer assets={assets}></Viewer>
        </div>
    );
}
export default (content) => {
    return <div>
        <Head
            title="SnaveSutit - Data Packs"
            description="Data Packs made by SnaveSutit"
            keywords="datapack SnaveSutit"
            url="snavesutit.net/datapacks"
        ></Head>
        <Nav path="/projects"></Nav>
        <Grid centered columns={1} style={{ marginTop: 80, width: "100vw", overflowX: "wrap" }}>
            <Grid.Column style={{
                display: "contents"
            }}>
                <div className="wrapper">
                    <Grid columns={1}>
                        <Grid.Column style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="title-wrapper">
                                <div className="icon" style={{ width: "128px", height: "128px", backgroundImage: `url(${content.icon})`, backgroundSize: "cover" }}></div>
                                <div className="info">
                                    <p className="title">{content.title}</p>
                                    <p className="versions">{content.gameVersions.join(", ")}</p>
                                </div>
                            </div>
                            <div className="button-wrapper">
                                {content.source && <span className="btn">
                                    <Button onClick={() => {
                                        window.open(content.source, "_blank");
                                    }}>
                                        View Source
                                    </Button>
                                </span>}
                                {Object.keys(content.downloads).length > 1 &&
                                    <span className="btn">
                                        <Dropdown
                                            text='Downloads'
                                            floating
                                            labeled
                                            button
                                            className='icon'
                                            button
                                        >
                                            <Dropdown.Menu>
                                                {Object.entries(content.downloads).map(([name, value], index) => {
                                                    return <Dropdown.Item key={index} text={name} onClick={() => {
                                                        window.open(value.url, "_black");
                                                    }}></Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span>
                                }
                                {Object.keys(content.downloads).length == 1 &&
                                    <span className="btn">
                                        <Button onClick={() => {
                                            const value = Object.values(content.downloads)[0];
                                            window.open(value.url, "_black");
                                        }}>Download</Button>
                                    </span>
                                }
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <p dangerouslySetInnerHTML={{ __html: content.description }} style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                            </p>
                            <Slides assets={content.assets}></Slides>
                        </Grid.Column>
                    </Grid>
                </div>
            </Grid.Column>
        </Grid>
        <style jsx>
            {`
            .wrapper{
                width:calc(100vw - 160px);
                margin-left:80px;
                min-height:80vh;
                background-color:#C4C4C4;
                border-radius:22px;
            }
            .icon{
                margin-top:9px;
                margin-left:9px;
                border-radius:16px;
                margin-right:10px;
            }
            .title-wrapper{
              display:inline-block;
              color:black;
              background: #C4C4C4;
              border-radius: 22px;
              display:flex;
              height:146px;
              justify-content: left;
              margin:1em;
              width:500px;
            }
            .title{
              margin-top:3px;
              font-size: 24px;
              margin-bottom:0px;
            }
            .versions{
              font-size: 13px;
              margin-bottom:6px;
            }
            .overview{
              font-size: 18px;
            }
            .info{
                margin-top:1em;
            }
            .button-wrapper{
                width:100%;
                display: flex; justify-content: flex-end;
            }
            .button-wrapper>.btn{
                margin-right:2em;
                margin-top:2em;
            }
                  `}
        </style>
    </div>
}

export async function getStaticPaths() {
    const res = {
        paths: [],
        fallback: false
    }
    const files = await fs.promises.readdir(path.join(process.cwd(), "./data/maps"));
    for (let file of files) {
        if (file.indexOf(".gitkeep") > -1) {
            continue;
        }
        const data = JSON.parse(await fs.promises.readFile(path.join(process.cwd(), "./data/maps", file), "utf-8"));
        res.paths.push(
            { params: { blob: data.blob } });
    }
    return res;
}

export async function getStaticProps(context) {

    const data = JSON.parse(await fs.promises.readFile(path.join(process.cwd(), "./data/maps", context.params.blob + ".json"), "utf-8"));
    return { props: data }
}