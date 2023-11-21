import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const MicButtonIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 67}
      height={height ? height : 67}
      viewBox="0 0 67 67"
      fill="none">
      <Circle cx={33.5} cy={33.5} r={33} fill="gray" stroke="#fff" />
      <Path
        d="M38.742 32.917c0 3.25-2.752 5.525-5.742 5.525s-5.742-2.275-5.742-5.525h-1.841c0 3.694 2.946 6.749 6.5 7.28v3.553h2.166v-3.553c3.554-.531 6.5-3.586 6.5-7.28M31.7 26.308c0-.715.585-1.3 1.3-1.3.715 0 1.3.585 1.3 1.3l-.01 6.717c0 .715-.575 1.3-1.29 1.3-.715 0-1.3-.585-1.3-1.3m1.3 3.142a3.25 3.25 0 003.25-3.25v-6.5a3.25 3.25 0 00-6.5 0v6.5a3.25 3.25 0 003.25 3.25z"
        fill="#fff"
      />
    </Svg>
  );
};

export default MicButtonIcon;
