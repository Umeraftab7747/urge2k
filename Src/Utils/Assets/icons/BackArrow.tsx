import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const BackArrow: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 20}
      height={height ? height : 18}
      viewBox="0 0 20 18"
      fill={`${fill ? fill : 'none'}`}>
      <Path d="M19.375 10.25H4.893l5.625 5.625-1.768 1.768L.108 9 8.75.358l1.768 1.767L4.893 7.75h14.482v2.5z" />
    </Svg>
  );
};

export default BackArrow;
