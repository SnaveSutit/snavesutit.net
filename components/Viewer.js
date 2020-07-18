import React, { useState } from "react";
import Player from "react-player";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Carousel from "react-elastic-carousel";
// export function Viewer({ assets }) {
//     const [index, setIndex] = useState(0);
//     const asset = assets[index];
//     const isYoutube = asset.url.indexOf("youtube") > -1;
//     return <>
//         <div className="wrapper">
//             <div className="slider">
//                 <button onClick={() => {
//                     let value = index - 1;
//                     if (value < 0) {
//                         value += assets.length;
//                     }
//                     setIndex(value);
//                 }}><BsArrowLeftShort scale={3}></BsArrowLeftShort></button>
//                 <div className="item">
//                     {isYoutube && <Player
//                         url={asset.url}
//                         width={720}
//                         height={360}
//                         controls={true}
//                     ></Player>}
//                     {!isYoutube && <img src={asset.url} className="image"></img>}
//                 </div>
//                 <button onClick={() => {
//                     setIndex((index + 1) % assets.length);
//                 }}><BsArrowRightShort scale={3}></BsArrowRightShort></button>
//             </div>
//             <div className="dots">
//                 {assets.map((_, i) => {
//                     return <button onClick={() => setIndex(i)} className={index === i ? "current" : ""}></button>
//                 })}
//             </div>
//         </div>
//         <style jsx>
//             {`
//                 .wrapper{
//                     width:fit-content;
//                     margin-left:auto;
//                     margin-right:auto;
//                 }
//                 .slider{
//                     display:flex;
//                 }
//                 .item{
//                     width:720px;
//                     max-width:720px;
//                     max-height:360px;
//                     display:flex;
//                     background-color:black;
//                 }
//                 .image{
//                     max-width:720px;
//                     max-height:360px;
//                     margin:auto;
//                 }
//                 button{
//                     border: none;
//                     background: #eeeeee88;
//                     outline:none;
//                 }
//                 button:hover{
//                     background:#88888888;
//                 }

//                 button:focus{
//                     background:#55555588;
//                 }
//                 .dots{
//                     margin-top:5px;
//                     margin-left:auto;
//                     margin-right:auto;
//                     width:fit-content;
//                 }
//                 .dots>button{
//                     width:16px;
//                     height:16px;
//                     border-radius:8px;
//                 }
//                 .current{
//                     background-color:#888888
//                 }
//             `}
//         </style>
//     </>
// }

export function Viewer({ assets }) {
    return <Carousel>
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
}