import React from "react";
import Svg, { Path, Mask, Rect, G, Defs, ClipPath } from "react-native-svg";

const WishListIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <Path fill="#7B7B7B" d="M13.2812 23.4375L11.582 21.8639C5.54688 16.2968 1.5625 12.6132 1.5625 8.11904C1.5625 4.43546 4.39844 1.5625 8.00781 1.5625C10.0469 1.5625 12.0039 2.5281 13.2812 4.04206C14.5586 2.5281 16.5156 1.5625 18.5547 1.5625C22.1641 1.5625 25 4.43546 25 8.11904C25 12.6132 21.0156 16.2968 14.9805 21.8639L13.2812 23.4375Z"/>
        </Svg>
    );
};

export default WishListIcon;



