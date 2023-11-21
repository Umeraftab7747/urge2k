import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const LogoutIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M11.333 5.333l-.933.934 1.067 1.066H6v1.334h5.467L10.4 9.733l.933.934L14 8l-2.667-2.667zm-8-2H8V2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14H8v-1.333H3.333V3.333z"
        fill={`${fill ? fill : '#fff'}`}
      />
    </Svg>
  );
};

export default LogoutIcon;
