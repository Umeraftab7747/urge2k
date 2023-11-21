import React from 'react';
import Svg, {Path, G, Circle, Defs} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const ActorCallIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 45}
      height={height ? height : 45}
      viewBox="0 0 45 45"
      fill="none">
      <G filter="url(#filter0_d_12_4633)">
        <Circle cx={22.2237} cy={18.2237} r={17.2237} fill="#BABABA" />
        <Circle cx={22.2237} cy={18.2237} r={17.7237} stroke="#fff" />
      </G>
      <Path
        d="M29.976 22.915c-.631-.636-2.16-1.564-2.902-1.939-.966-.486-1.046-.526-1.805.038-.506.377-.843.713-1.436.587-.593-.127-1.88-.84-3.009-1.964-1.128-1.124-1.882-2.45-2.009-3.04-.126-.591.215-.924.588-1.432.526-.715.486-.835.037-1.8-.35-.752-1.306-2.267-1.944-2.895-.683-.675-.683-.555-1.123-.373-.358.151-.702.335-1.027.548-.636.423-.99.774-1.236 1.301-.247.528-.358 1.765.917 4.08 1.275 2.317 2.17 3.501 4.021 5.348 1.851 1.846 3.275 2.839 5.356 4.006 2.575 1.442 3.563 1.16 4.092.914.529-.246.882-.596 1.305-1.232.214-.325.398-.668.549-1.026.183-.438.302-.438-.374-1.121z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
};

export default ActorCallIcon;
