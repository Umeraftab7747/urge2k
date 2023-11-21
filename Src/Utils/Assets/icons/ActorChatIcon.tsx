import React from 'react';
import Svg, {Circle, Defs, G, Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const ActorChatIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 45}
      height={height ? height : 45}
      viewBox="0 0 45 45"
      fill="none">
      <G filter="url(#filter0_d_12_4626)">
        <Circle cx={22.2237} cy={18.7764} r={17.2237} fill="#979797" />
        <Circle cx={22.2237} cy={18.7764} r={17.7237} stroke="#fff" />
      </G>
      <Path
        d="M22.224 10.947c4.756 0 8.611 3.133 8.611 6.998 0 3.864-3.855 6.997-8.611 6.997-.457 0-.906-.03-1.343-.085-1.85 1.85-4.058 2.182-6.193 2.23v-.453c1.153-.565 2.153-1.593 2.153-2.769 0-.161-.012-.322-.036-.482-1.948-1.283-3.193-3.242-3.193-5.438 0-3.865 3.856-6.998 8.612-6.998z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
};

export default ActorChatIcon;
