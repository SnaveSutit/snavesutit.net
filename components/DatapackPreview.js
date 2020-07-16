
import React from "react";
import { Grid } from 'semantic-ui-react';
import Link from "next/link";
export function DatapackPreview({ pack }) {
  return <>
    <Link href="/datapacks/[blob]" as={`/datapacks/${pack.blob}`}>
      <a className="wrapper">
        <div className="icon" style={{ width: "128px", height: "128px", backgroundImage: `url(${pack.icon})`, backgroundSize: "cover" }}></div>
        <div className="info">
          <p className="title">{pack.title}</p>
          <p className="versions">{pack.versions.join(", ")}</p>
          <p className="overview">{pack.overview}</p>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .icon{
          margin-top:9px;
          margin-left:9px;
          border-radius:16px;
          margin-right:10px;
      }
      .wrapper{
        color:black;
        background: #C4C4C4;
        border-radius: 22px;
        display:flex;
        width:500px;
        height:146px;
        justify-content: left;
        margin:1em;
        transform:scale(1.0);
        transition-property:transform;
        z-index:0;
        transition:0.2s;
        overflow:hidden;
      }
      .wrapper:hover{
          transform:scale(1.1);
          transition-property:transform;
          transition:0.2s;
          z-index:1;
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
          width:calc(500px - 138px)
      }
    `}</style>
  </>;
}
