import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react'
import React from "react";
import Head from '../components/head'
import Nav from '../components/nav'
export default () => (
  <div>
    <Grid columns={1}>
      <Grid.Row>
        <Nav path="/"></Nav>
      </Grid.Row>
      <Grid centered columns={1} style={{ marginTop: 80 }}>
        <Grid.Column>
          <img className="img" src="/SnaveSutit.png" width="256" height="256"></img>
        </Grid.Column>
        <Grid.Column>
          <div className="wrapper">
            <h1>About Me</h1>
            <p className="info">
              Have you ever had a dream that you, um, you had, your, you- you could,
              you’ll do, you- you wants, you, you could do so, you- you’ll do, you could,
              you, you want, you want them to do you so much you could do anything?
            </p>
          </div>
        </Grid.Column>
      </Grid>
    </Grid>
    <style jsx>
      {`
        .img{
          margin-left:calc(50% - 128px);
          border-radius: 32px;
        }
        .wrapper{
          color:white;
          text-align:center;
        }
        .info{
          margin-left:25%;
          margin-right:25%;
        }
      `}
    </style>
  </div>
)
