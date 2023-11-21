import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const GoldCrown: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 12}
      height={height ? height : 12}
      viewBox="0 0 12 12"
      fill="none">
      <Path
        d="M1.003 9.5h10v1h-10v-1zm0-7l2.5 1.5 2.5-3 2.5 3 2.5-1.5v6h-10v-6z"
        fill="#F7D500"
      />
    </Svg>
  );
};

export default GoldCrown;
