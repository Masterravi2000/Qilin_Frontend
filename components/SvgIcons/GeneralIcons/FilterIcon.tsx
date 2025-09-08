import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const FilterIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="20" height="17" viewBox="0 0 20 17" fill="none">
            <Path stroke="white" strokeWidth={2} d="M7.75 4.21428H19M1 12.7857H12.25" stroke-linecap="round" />
            <Path stroke="white" strokeWidth={2} d="M1 4.21428C1 5.98948 2.51104 7.42857 4.375 7.42857C6.23896 7.42857 7.75 5.98948 7.75 4.21428C7.75 2.43908 6.23896 1 4.375 1C2.51104 1 1 2.43908 1 4.21428Z" stroke-linecap="round" />
            <Path stroke="white" strokeWidth={2} d="M12.25 12.7857C12.25 14.5609 13.761 16 15.625 16C17.489 16 19 14.5609 19 12.7857C19 11.0105 17.489 9.57143 15.625 9.57143C13.761 9.57143 12.25 11.0105 12.25 12.7857Z" stroke-linecap="round" />
        </Svg>
    );
};

export default FilterIcon;



