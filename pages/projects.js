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
      <Grid centered columns={2} style={{ marginTop: 80, textAlign: "center" }}>
        <Grid.Column>
          <h3>Minecraft</h3>
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
        <Grid.Column>
          <h3>Other</h3>
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
        margin-bottom:1em;
        margin-right:1em;
        background-color:#c3c3c3;
        border-radius:22px;
        overflow:hidden;
        z-index:0;
        transform:scale(1.0);
        transition-property:transform;
        transition:0.2s;
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
        background-image:url(https://via.placeholder.com/250/300);
        background-size: cover;
      }
      .maps{
        background-image:url(https://via.placeholder.com/250/500);
        background-size: cover;
      }
      .resourcepacks{
        background-image:url(https://via.placeholder.com/250/700);
        background-size: cover;
      } 
      `}
    </style>
  </div>
)
