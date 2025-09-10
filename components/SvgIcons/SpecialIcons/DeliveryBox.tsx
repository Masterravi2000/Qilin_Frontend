import React from "react";
import { Svg, Rect, Defs, Path, G, ClipPath } from "react-native-svg";

const DeliveryBoxIcon = ({ color, fw }: { color?: string; fw?: string }) => {
    return (
        <Svg width="27" height="27" viewBox="0 0 27 27" fill="none">
            <G clip-path="url(#clip0_21_104)">
                <Path d="M8.4375 8.4375V19.6875L17.4375 23.625L26.4375 19.6875V8.4375" stroke="#111111" strokeWidth={1.5} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M8.4375 8.4375L17.4375 12.375L26.4375 8.4375" stroke="#111111" strokeWidth={1.5} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M12.9375 6.46875L21.9375 10.4411V14.0625" stroke="#111111" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M8.4375 8.4375L17.4375 4.5L26.4375 8.4375M1.6875 15.3585L1.74038 15.3832L6.1875 17.4375M2.48175 11.7877L6.1875 13.5M3.22313 8.19337L6.1875 9.5625M17.4375 12.375V23.625" stroke="#111111" strokeWidth={1.5} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_21_104">
                    <Rect width="27" height="27" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default DeliveryBoxIcon;
