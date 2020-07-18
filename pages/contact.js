import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css'
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react'
import React from "react";
import Head from '../components/head'
import Nav from '../components/nav'
export default () => (
  <div>
    <Grid columns={1}>
      <Grid.Row>
        <Nav path="/contact"></Nav>
      </Grid.Row>
      <Grid centered columns={2} style={{ marginTop: 80 }}>
        <Grid.Column>
          <div style={{ color: "white", fontSize: "32px" }}>
            <FaDiscord size={64} color={"white"} style={{ color: "white", transform: "translate(0px, 22px)" }}></FaDiscord>
              SnaveSutit#0042
              </div>
          <div style={{ color: "white", fontSize: "32px" }}>
            <MdEmail size={64} color={"white"} style={{ color: "white", transform: "translate(0px, 22px)" }}></MdEmail>
            SnaveSutitMC@gmail.com
              </div>
        </Grid.Column>
      </Grid>
    </Grid>
  </div>
)
