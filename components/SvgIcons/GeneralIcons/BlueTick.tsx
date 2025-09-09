import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const BlueTickIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="18" height="16" viewBox="0 0 20 18" fill="none" >
            <Path d="M7.16665 17.75L5.58331 15.0833L2.58331 14.4167L2.87498 11.3333L0.833313 9L2.87498 6.66667L2.58331 3.58333L5.58331 2.91667L7.16665 0.25L9.99998 1.45833L12.8333 0.25L14.4166 2.91667L17.4166 3.58333L17.125 6.66667L19.1666 9L17.125 11.3333L17.4166 14.4167L14.4166 15.0833L12.8333 17.75L9.99998 16.5417L7.16665 17.75ZM9.12498 11.9583L13.8333 7.25L12.6666 6.04167L9.12498 9.58333L7.33331 7.83333L6.16665 9L9.12498 11.9583Z" fill="#3A72FF" />
        </Svg>
    );
};

export default BlueTickIcon;



