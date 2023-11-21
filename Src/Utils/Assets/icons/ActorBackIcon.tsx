import React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const ActorBackIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 49}
      height={height ? height : 49}
      viewBox="0 0 49 49"
      fill="none">
      <G opacity={0.3} filter="url(#filter0_d_12_4672)">
        <Circle cx={24.5} cy={22.5} r={22.5} fill="#000" />
        <Circle cx={24.5} cy={22.5} r={22} stroke="#fff" />
      </G>
      <Path
        d="M33.375 23.25H18.892l5.625 5.625-1.767 1.768L14.107 22l8.643-8.642 1.767 1.767-5.625 5.625h14.483v2.5z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
};

export default ActorBackIcon;
