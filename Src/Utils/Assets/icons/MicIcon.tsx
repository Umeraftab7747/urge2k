import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const MicIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 32}
      height={height ? height : 44}
      viewBox="0 0 32 44"
      fill="none">
      <Path
        d="M16 .5a6.75 6.75 0 016.75 6.75v13.5a6.75 6.75 0 01-13.5 0V7.25A6.75 6.75 0 0116 .5zm15.75 20.25c0 7.942-5.872 14.49-13.5 15.593v6.907h-4.5v-6.907C6.123 35.24.25 28.693.25 20.75h4.5a11.25 11.25 0 0022.5 0h4.5z"
        fill="#fff"
      />
    </Svg>
  );
};

export default MicIcon;
