import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}

const ReviewStar: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 11}
      height={height ? height : 11}
      viewBox="0 0 11 11"
      fill="none">
      <Path
        d="M11 3.929H6.777L5.5 0 4.223 3.929H0l3.438 2.357-1.326 3.928L5.5 7.76l3.388 2.455-1.325-3.928L11 3.929z"
        fill="#FFD801"
      />
    </Svg>
  );
};

export default ReviewStar;
