import React from "react";
import Player from "react-player";
import Carousel from "react-elastic-carousel";
import "./viewer.css";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export function Viewer({ assets }) {
    return <div style={{ width: "fit-content", height: "fit-content", marginLeft: "auto", marginRight: "auto", paddingTop: "2em" }}>
        <Carousel>
            {assets.map((asset, index) => (<React.Fragment key={index}>
                {asset.url.indexOf("youtube") > -1 && <Player
                    url={asset.url}
                    width={720}
                    height={360}
                    controls={true}
                ></Player>}
                {asset.url.indexOf("youtube") == -1 && <img src={asset.url} className="image"></img>}
            </React.Fragment>))}
        </Carousel>
    </div>
}