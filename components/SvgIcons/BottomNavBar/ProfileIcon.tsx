import React from "react";
import Svg, { Path, Mask, Rect, G, Defs, ClipPath } from "react-native-svg";

const ProfileIcon = ({ color, fw }: { color?: string, fw?: string }) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clip-path="url(#clip0_31_253)">
                <Path fill="#7B7B7B" stroke="#7B7B7B" stroke-width="2" d="M5.16666 26.25C5.16666 24.8798 5.711 23.5656 6.67994 22.5967C7.64888 21.6277 8.96304 21.0834 10.3333 21.0834H20.6667C22.0369 21.0834 23.3511 21.6277 24.32 22.5967C25.289 23.5656 25.8333 24.8798 25.8333 26.25C25.8333 26.9352 25.5611 27.5923 25.0767 28.0767C24.5922 28.5612 23.9351 28.8334 23.25 28.8334H7.74999C7.06485 28.8334 6.40777 28.5612 5.9233 28.0767C5.43883 27.5923 5.16666 26.9352 5.16666 26.25Z" stroke-linejoin="round" />
                <Path fill="#7B7B7B" stroke="#7B7B7B" stroke-width="2" d="M15.5 15.9167C17.6401 15.9167 19.375 14.1818 19.375 12.0417C19.375 9.90158 17.6401 8.16669 15.5 8.16669C13.3599 8.16669 11.625 9.90158 11.625 12.0417C11.625 14.1818 13.3599 15.9167 15.5 15.9167Z" />
            </G>
            <Defs>
                <ClipPath id="clip0_31_253">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default ProfileIcon;



