import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const StarIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 35}
      height={height ? height : 33}
      viewBox="0 0 35 33"
      fill="none">
      <Path
        d="M32.813 13.219H21.055L17.5 2.28 13.945 13.22H2.187l9.57 6.562-3.69 10.938 9.433-6.836 9.434 6.836-3.692-10.938 9.57-6.562z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StarIcon;
