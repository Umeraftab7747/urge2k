import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}

const SendMsgButton: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 66}
      height={height ? height : 66}
      viewBox="0 0 66 66"
      fill="none">
      <G filter="url(#filter0_d_33_1981)">
        <Circle cx={33} cy={29} r={28} fill="url(#paint0_linear_33_1981)" />
        <Circle cx={33} cy={29} r={28.5} stroke="#fff" />
      </G>
      <Path
        d="M46.257 17.654L19.552 31.71a.3.3 0 00.02.54l7.315 3.2a.2.2 0 00.208-.029l13.62-11.272c.093-.077.218.047.142.14L30.68 36.78a.2.2 0 00.09.315l12.392 4.29a.3.3 0 00.394-.236l3.717-22.761a.7.7 0 00-1.017-.733z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_33_1981"
          x1={33}
          y1={1}
          x2={33}
          y2={57}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C6191B" />
          <Stop offset={1} stopColor="#CC1FB9" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SendMsgButton;
