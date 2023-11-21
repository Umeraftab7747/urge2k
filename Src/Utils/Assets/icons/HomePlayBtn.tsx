import React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}
const HomePlayBtn: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 54}
      height={height ? height : 54}
      viewBox="0 0 54 54"
      fill="none">
      <G filter="url(#filter0_d_11_4440)">
        <Circle cx={27} cy={23} r={22} fill="#ACACAC" />
        <Circle cx={27} cy={23} r={22.5} stroke="#fff" />
      </G>
      <Path d="M22.5 16v15l12-7.5-12-7.5z" fill="#fff" />
      <Defs></Defs>
    </Svg>
  );
};

export default HomePlayBtn;
