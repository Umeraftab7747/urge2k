import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const GiftAdd: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 48}
      height={height ? height : 48}
      viewBox="0 0 48 48"
      fill="none">
      <Path
        d="M24 45c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"
        fill="#4CAF50"
      />
      <Path d="M21 14h6v20h-6V14z" fill="#fff" />
      <Path d="M14 21h20v6H14v-6z" fill="#fff" />
    </Svg>
  );
};

export default GiftAdd;
