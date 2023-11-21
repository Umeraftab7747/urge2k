import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const CrossIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 22}
      height={height ? height : 22}
      viewBox="0 0 22 22"
      fill="none">
      <Path
        d="M1.833 1.833l18.334 18.334m-18.334 0L20.167 1.833"
        stroke={`${fill ? fill : '#fff'}`}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CrossIcon;
