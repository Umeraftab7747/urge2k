import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const TrashIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 13}
      height={height ? height : 13}
      viewBox="0 0 10 10"
      fill="none">
      <Path
        d="M2.5 1V0h5v1H10v1H9v7.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V2H0V1h2.5zM2 2v7h6V2H2zm1.5 1.5h1v4h-1v-4zm2 0h1v4h-1v-4z"
        fill="#fff"
      />
    </Svg>
  );
};

export default TrashIcon;
