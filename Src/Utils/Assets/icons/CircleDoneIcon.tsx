import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}

const CircleDoneIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M8 1.333c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.667-6.667-6.667zm-1.333 10L3.333 8l.94-.94 2.394 2.387 5.06-5.06.94.946-6 6z"
        fill="#188754"
      />
    </Svg>
  );
};

export default CircleDoneIcon;
