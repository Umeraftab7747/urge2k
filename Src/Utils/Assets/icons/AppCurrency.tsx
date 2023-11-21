import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fontSize?: number;
}
const AppCurrency: React.FC<Props> = ({width, height, fontSize}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 25}
      height={height ? height : 48}
      viewBox="0 0 25 48"
      fontSize={fontSize}
      fill="none">
      <Path
        d="M21.672 35h-3.648L7.048 18.392V35H3.4V12.728h3.648l10.976 16.576V12.728h3.648V35z"
        fill="#fff"
      />
      <Path fill="#fff" d="M0 19H24V22H0z" />
      <Path fill="#fff" d="M0 24H24V27H0z" />
    </Svg>
  );
};

export default AppCurrency;
