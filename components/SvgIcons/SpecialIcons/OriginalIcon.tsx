import React from "react";
import { Svg, Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const OriginalIcon = ({ color, fw }: { color?: string; fw?: string }) => {
    return (
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <Rect width="30" height="30" fill="url(#pattern0_21_86)" />
            <Defs>
                <Pattern id="pattern0_21_86" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <Use transform="scale(0.00195312)" />
                </Pattern>
                <Image id="image0_21_86" width="512" height="512" preserveAspectRatio="none" ></Image>
            </Defs>
        </Svg>

    );
};

export default OriginalIcon;
