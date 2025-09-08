import React from "react";
import Svg, { Path, Mask, Rect } from "react-native-svg";

const SearchIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="26" height="26" viewBox="0 0 29 29" fill="none">
            <Path stroke="#a3a3a3ff" strokeWidth={2} d="M20.5417 20.5417L25.375 25.375M3.625 13.2917C3.625 15.8554 4.64345 18.3142 6.4563 20.127C8.26915 21.9399 10.7279 22.9583 13.2917 22.9583C15.8554 22.9583 18.3142 21.9399 20.127 20.127C21.9399 18.3142 22.9583 15.8554 22.9583 13.2917C22.9583 10.7279 21.9399 8.26915 20.127 6.4563C18.3142 4.64345 15.8554 3.625 13.2917 3.625C10.7279 3.625 8.26915 4.64345 6.4563 6.4563C4.64345 8.26915 3.625 10.7279 3.625 13.2917Z" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export default SearchIcon;



