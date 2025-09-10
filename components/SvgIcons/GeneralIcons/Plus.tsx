import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const PlusIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <Path fill="white" d="M17.0683 3.06328C17.0683 1.38148 15.6968 0 14.005 0C12.3132 0 10.9317 1.38148 10.9417 3.06328V10.9417H3.06328C1.38148 10.9417 0 12.3132 0 14.005C0 15.6868 1.38148 17.0683 3.06328 17.0683H10.9417V24.9367C10.9417 26.6185 12.3132 28 14.005 28C15.6868 28 17.0683 26.6285 17.0683 24.9367V17.0683H24.9367C26.6185 17.0683 28 15.6968 28 14.005C28 12.3232 26.6285 10.9417 24.9367 10.9417H17.0683V3.06328Z"/>
        </Svg>
    );
};

export default PlusIcon;



