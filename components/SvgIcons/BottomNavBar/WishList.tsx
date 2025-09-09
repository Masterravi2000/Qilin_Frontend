import React from "react";
import Svg, { Path, Mask, Rect, G, Defs, ClipPath } from "react-native-svg";

const WishListIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
            <Path fill="white" d="M10.1562 18.6875L8.72891 17.3657C3.65938 12.6893 0.3125 9.59513 0.3125 5.81999C0.3125 2.72578 2.69469 0.3125 5.72656 0.3125C7.43937 0.3125 9.08328 1.1236 10.1562 2.39533C11.2292 1.1236 12.8731 0.3125 14.5859 0.3125C17.6178 0.3125 20 2.72578 20 5.81999C20 9.59513 16.6531 12.6893 11.5836 17.3657L10.1562 18.6875Z" />
        </Svg>
    );
};

export default WishListIcon;



