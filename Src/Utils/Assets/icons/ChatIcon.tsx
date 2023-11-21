import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}

const ChatIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 21}
      height={height ? height : 21}
      viewBox="0 0 22 21"
      fill="none">
      <Path
        d="M11 .375c6.075 0 11 4.001 11 8.938 0 4.936-4.925 8.937-11 8.937-.583 0-1.156-.037-1.715-.109-2.362 2.363-5.183 2.788-7.91 2.85v-.58c1.473-.721 2.75-2.035 2.75-3.536a4.14 4.14 0 00-.047-.616C1.591 14.62 0 12.117 0 9.312 0 4.377 4.925.376 11 .376z"
        fill="#fff"
      />
    </Svg>
  );
};

export default ChatIcon;
