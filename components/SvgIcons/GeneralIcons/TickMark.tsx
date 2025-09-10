import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const TickMarkIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1 7L3 5L7 9L15 1L17 3L7 13L1 7Z" fill="#FE386A" stroke="#FE386A" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export default TickMarkIcon;



