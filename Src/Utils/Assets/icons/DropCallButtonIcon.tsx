import React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const DropCallButtonIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 67}
      height={height ? height : 67}
      viewBox="0 0 67 67"
      fill="none">
      <Circle cx={33.5} cy={33.5} r={33} fill="#FE0000" stroke="#fff" />
      <G clipPath="url(#clip0_19_31)">
        <Path
          d="M24.89 36.547c.942-.942 2.007-1.7 3.133-2.275a1.058 1.058 0 00.59-.958l-.306-2.712c3.202-1.133 7.185-1.21 10.51-.046l-.223 2.766c.008.421.246.781.598.965a12.08 12.08 0 013.133 2.275 1.082 1.082 0 001.517 0l2.65-2.65c.414-.414.728-1.096.153-1.67-7.116-7.117-18.951-7.11-26.06 0-.544.544-.276 1.24.146 1.662l2.642 2.643a1.082 1.082 0 001.517 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_19_31">
          <Path
            fill="#fff"
            transform="rotate(135 19.165 27.27)"
            d="M0 0H26V26H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DropCallButtonIcon;
