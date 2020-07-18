import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Image } from 'semantic-ui-react'
import path from "path";
import fs from "fs";
import React from "react";
import Head from '../components/head'
import Nav from '../components/nav'
import { Preview } from '../components/Preview';
export default (props) => {
  return <div>
    <Head
      title="SnaveSutit - Data Packs"
      description="Data Packs made by SnaveSutit"
      keywords="datapack SnaveSutit"
      url="snavesutit.net/datapacks"
    ></Head>
    <Nav path="/projects"></Nav>
    <Grid centered columns={1} style={{ paddingTop: "80px", width: "100vw", overflowX: "wrap" }}>
      <Grid.Column style={{
        display: "contents"
      }}>
        {props.data.map(datapack => {
          return <Preview key={datapack.blob} type="datapack" pack={datapack}></Preview>
        })}

        {props.data.length === 0 && <div style={{ color: "white", textAlign: "center" }}>
          <h1 style={{ marginTop: "128px" }}>No Projects found</h1>
          <br />
          <p>Please check back in later.</p>
        </div>}
      </Grid.Column>
    </Grid>
  </div>;
}


export async function getStaticProps(context) {
  const files = await fs.promises.readdir(path.join(process.cwd(), "./data/resourcepacks"));
  const props = [];
  for (const file of files) {
    if (file.indexOf(".gitkeep") > -1) {
      continue;
    }
    const item = {};
    const data = JSON.parse(await fs.promises.readFile(path.join(process.cwd(), "./data/resourcepacks", file), "utf-8"));
    item.title = data.title;
    item.blob = data.blob;
    item.versions = data.gameVersions;
    item.icon = data.icon;
    item.overview = data.overview;
    props.push(item);
  }
  return { props: { data: props } };
}