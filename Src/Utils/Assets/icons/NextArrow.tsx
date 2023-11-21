import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const NextArrow: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 30}
      height={height ? height : 30}
      viewBox="0 0 30 30"
      fill={`${fill ? fill : 'none'}`}>
      <Path d="M5.625 16.25h14.483l-5.626 5.625 1.768 1.768L24.892 15 16.25 6.358l-1.768 1.767 5.626 5.625H5.625v2.5z" />
    </Svg>
  );
};

export default NextArrow;
