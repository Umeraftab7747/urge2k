import React from 'react';
import Svg, {G, Mask, Path, Defs, ClipPath} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const PlayIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 39}
      height={height ? height : 40}
      viewBox="0 0 39 40"
      fill="none">
      <G clipPath="url(#clip0_33_1682)">
        <Mask
          id="a"
          //   style={{
          //     maskType: "luminance"
          //   }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={38}
          height={39}>
          <Path d="M37.8.552H.467v38.06H37.8V.553z" fill="#fff" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M7.444 2.411C3.754.508.764 2.067.764 5.891v28.215c0 3.828 2.99 5.385 6.68 3.483l27.424-14.143c3.69-1.904 3.69-4.988 0-6.892L7.444 2.411z"
            fill="#fff"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_33_1682">
          <Path fill="#fff" transform="translate(.2)" d="M0 0H38.4V40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PlayIcon;
