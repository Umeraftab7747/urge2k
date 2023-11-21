import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const HeartIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 35}
      height={height ? height : 32}
      viewBox="0 0 35 32"
      fill="none">
      <Path
        d="M17.502 3.204A10.12 10.12 0 0131.33 17.971l-8.489 8.49L17.5 31.8 5.67 19.971 3.67 17.969A10.12 10.12 0 0117.5 3.204h.002zm5.338 18.663l6.192-6.194a6.87 6.87 0 00-2.229-11.207 6.872 6.872 0 00-7.488 1.49L17.5 7.768l-1.815-1.815a6.872 6.872 0 00-9.718 9.717l2.002 2.002 9.53 9.53 5.339-5.337.002.001z"
        fill="#fff"
      />
    </Svg>
  );
};

export default HeartIcon;
