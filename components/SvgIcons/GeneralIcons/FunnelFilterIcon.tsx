import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const FunnelFilterIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="12" height="13" viewBox="0 0 18 19" fill="none">
            <Path stroke="#6d6d6dff" strokeWidth={2} d="M1 1H17V3.172C16.9999 3.70239 16.7891 4.21101 16.414 4.586L12 9V16L6 18V9.5L1.52 4.572C1.18545 4.20393 1.00005 3.7244 1 3.227V1Z" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export default FunnelFilterIcon;



