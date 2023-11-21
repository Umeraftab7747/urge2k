import React from 'react';
import Svg, {Path, G, Circle, Defs} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const ActorVideoIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 45}
      height={height ? height : 45}
      viewBox="0 0 45 45"
      fill="none">
      <G filter="url(#filter0_d_12_4629)">
        <Circle cx={22.2237} cy={18.5001} r={17.2237} fill="#BABABA" />
        <Circle cx={22.2237} cy={18.5001} r={17.7237} stroke="#fff" />
      </G>
      <Path
        d="M26.464 17.228v-2.969a.848.848 0 00-.848-.848H15.44a.848.848 0 00-.848.848v8.482a.848.848 0 00.848.848h10.177a.848.848 0 00.848-.848v-2.969l3.393 3.393v-9.33l-3.393 3.393z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
};

export default ActorVideoIcon;
