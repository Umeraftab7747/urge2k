import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const TailLessBackIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 11}
      height={height ? height : 18}
      viewBox="0 0 11 18"
      fill="none">
      <Path
        d="M4 9l6.518 6.875-1.768 1.768L.108 9 8.75.358l1.768 1.767L4 9z"
        fill="#fff"
      />
    </Svg>
  );
};

export default TailLessBackIcon;
