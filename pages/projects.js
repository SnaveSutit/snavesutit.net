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
                  <div>
                    Data Packs
                  </div>
                </a>
              </Link>
            </div>
            <div>

              <Link href="/maps">
                <a>
                  <div>
                    Maps
                  </div>
                </a>
              </Link>
            </div>
            <div>

              <Link href="/resourcepacks">
                <a>
                  <div>
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
        padding-left:2em;
        padding-right:2em;
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items:middle;
      }
      .items>div{
        width:300px;
        height:300px;
        margin-left:auto;
        margin-bottom:5px;
        margin-right:auto;
        background-color:#c3c3c3;
        border-radius:22px;
        overflow:hidden;
      }
      .items>div>a>div{
        width:300px;
        height:300px;
      }
      `}
    </style>
  </div>
)
