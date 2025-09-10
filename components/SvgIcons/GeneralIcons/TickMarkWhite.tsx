import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const TickMarkWhiteIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1 9L3.75 6.33333L9.25 11.6667L20.25 1L23 3.66667L9.25 17L1 9Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export default TickMarkWhiteIcon;



