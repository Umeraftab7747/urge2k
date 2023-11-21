import React from 'react';
import {scale} from 'react-native-size-matters';
import Svg, {
  Rect,
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const VoiceNotesShowIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : scale(75)}
      height={height ? height : scale(69)}
      viewBox="0 0 75 69"
      fill="none">
      <Rect
        x={0.674757}
        y={0.674757}
        width={73.5049}
        height={67.6505}
        rx={14.6359}
        fill="#27282C"
        stroke="url(#paint0_linear_58_313)"
        strokeWidth={0.650485}
      />
      <Mask
        id="a"
        // style={{
        //   maskType: "luminance"
        // }}
        maskUnits="userSpaceOnUse"
        x={25}
        y={22}
        width={24}
        height={25}>
        <Path d="M48.5 22.345H25.167v23.788H48.5V22.345z" fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M29.527 23.507c-2.306-1.19-4.175-.215-4.175 2.175v17.635c0 2.392 1.87 3.365 4.175 2.176l17.14-8.84c2.307-1.19 2.307-3.117 0-4.306l-17.14-8.84z"
          fill="url(#paint1_linear_58_313)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_58_313"
          x1={37.4272}
          y1={1}
          x2={37.4272}
          y2={68}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C6191B" />
          <Stop offset={1} stopColor="#CC1FB9" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_58_313"
          x1={36.8746}
          y1={23}
          x2={36.8746}
          y2={46}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EE0808" />
          <Stop offset={1} stopColor="#BD07AB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default VoiceNotesShowIcon;
