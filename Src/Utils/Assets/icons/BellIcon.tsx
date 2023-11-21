import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}

const BellIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 13}
      height={height ? height : 13}
      viewBox="0 0 13 13"
      fill="none">
      <Path
        d="M12.546 11.596a5.996 5.996 0 01-1.046-1.221 5.262 5.262 0 01-.563-2.004V6.313a4.504 4.504 0 00-3.933-4.48v-.537a.556.556 0 10-1.113 0v.546a4.504 4.504 0 00-3.887 4.47v2.059a5.262 5.262 0 01-.563 2.004 6 6 0 01-1.029 1.22.416.416 0 00-.141.313v.567a.417.417 0 00.416.417h11.584a.417.417 0 00.416-.417v-.567a.417.417 0 00-.141-.312zm-11.409.462a6.739 6.739 0 001.017-1.25 5.934 5.934 0 00.687-2.437V6.313a3.642 3.642 0 117.28 0V8.37c.05.852.285 1.684.687 2.437.288.456.629.876 1.017 1.25H1.137z"
        fill="#fff"
      />
    </Svg>
  );
};

export default BellIcon;
