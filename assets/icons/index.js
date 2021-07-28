import {SvgXml} from "react-native-svg";

import listIcon from "./icon-24-list.svg";
import listActiveIcon from "./icon-24-list-active.svg";
import likeIcon from "./icon-24-like.svg";
import likeActiveIcon from "./icon-24-like-active.svg";
import audioStartIcon from "./icon-audio-start.svg";
import audioStopIcon from "./icon-audio-stop.svg";
import backIcon from "./icon-back.svg";

console.log(listIcon);

export const ListSVG = () => (
    <SvgXml xml={listIcon} />
)

export const ListActiveSVG = () => (
    <SvgXml xml={listActiveIcon} />
)

export const LikeSVG = () => (
    <SvgXml xml={likeIcon} />
)

export const LikeActiveSVG = () => (
    <SvgXml xml={likeActiveIcon} />
)

export const AudioStartSVG = () => (
    <SvgXml xml={audioStartIcon} />
)

export const AudioStopSVG = () => (
    <SvgXml xml={audioStopIcon} />
)

export const BackSVG = () => (
    <SvgXml xml={backIcon} />
)