import NextHead from 'next/head';
import { string } from 'prop-types';
import React from "react";
const defaultDescription = '';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
    <link rel="shortcut icon" href="/public/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
    <link rel="mask-icon" href="/public/favicon-mask.svg" color="#000000" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
  </NextHead>
);

Head.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  keywords: string.isRequired,
  url: string.isRequired
};

export default Head;
