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
        <Nav path="/contact"></Nav>
      </Grid.Row>
      <Grid centered columns={2} style={{ marginTop: 80 }}>
        <Grid.Column>
        </Grid.Column>
      </Grid>
    </Grid>
  </div>
)
