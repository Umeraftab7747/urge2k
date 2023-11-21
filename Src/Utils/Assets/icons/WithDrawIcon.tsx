import React from 'react';
import Svg, {Path, Rect, Circle} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const WithDrawIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 11}
      height={height ? height : 7}
      viewBox="0 0 11 7"
      fill="none">
      <Path fill="#FFF5F7" d="M0 0H11V7H0z" />
      <Rect x={1} y={1} width={9} height={5} rx={2.5} fill="#D61214" />
      <Circle cx={5.5} cy={3.5} r={1.5} fill="#FFF5F7" />
    </Svg>
  );
};

export default WithDrawIcon;
