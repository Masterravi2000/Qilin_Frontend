import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const BackIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="19" height="17" viewBox="0 0 19 17" fill="none" >
            <Path d="M8.91406 15.5312L1.88281 8.5L8.91406 1.46875M2.85938 8.5H17.1172" stroke="white" strokeWidth={2.5} stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export default BackIcon;



