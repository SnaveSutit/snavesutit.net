import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react'
import React from "react";
import Head from '../components/head'
import Nav from '../components/nav'
export default () => (
  <div>
    <Grid columns={1} >
      <Grid.Row>
        <Nav path="/projects"></Nav>
      </Grid.Row>
      <Grid centered columns={1} style={{ marginTop: 80, textAlign: "center" }}>
        <Grid.Column>
          <div className="items">
            <div>
              <Link href="/datapacks">
                <a>
                  <div className="datapacks">
                    Data Packs
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/maps">
                <a>
                  <div className="maps">
                    Maps
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/resourcepacks">
                <a>
                  <div className="resourcepacks">
                    Resource Packs
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </Grid>
    <style jsx>
      {`
      h3{
        text-align:center;
        color:white;
      }
      .items{
        margin-left:auto;
        margin-right:auto;
        padding-left:2em;
        padding-right:2em;
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items:middle;
      }
      .items>div{
        width:250px;
        height:250px;
        background-color:#c3c3c3;
        border-radius:22px;
        overflow:hidden;
        z-index:0;
        transform:scale(1.0);
        transition-property:transform;
        transition:0.2s;
        margin-left:2em;
        margin-right:2em;
      }
      .items>div:first-child{
        margin-left:auto;
      }
      .items>div:last-child{
        margin-right:auto;
      }
      .items>div>a>div{
        width:250px;
        height:250px;
        text-align: center;
        padding-top: 80%;
        font-size: 30px;
        color:gray;
      }
      .items>div:hover{
        z-index:1;
        transform:scale(1.1);
        transition-property:transform;
        transition:0.2s;
      }
      .datapacks{
        background-image:url(datapack.png);
        background-size: cover;
      }
      .maps{
        background-image:url(maps.png);
        background-size: cover;
      }
      .resourcepacks{
        background-image:url(resourcepack.png);
        background-size: cover;
      } 
      `}
    </style>
  </div>
)
