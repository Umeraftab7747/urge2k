import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const UploadCloud: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        // xmlns="http://www.w3.org/2000/svg"
        d="M3.893 6.757a3.335 3.335 0 101.685 6.45m6.44-6.45a3.335 3.335 0 11-1.685 6.45M12 6.667a4 4 0 00-8 0m1.688 2.627L8 6.974l2.377 2.36M8 12.666V8.154"
        stroke={`${fill ? fill : '#fff'}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default UploadCloud;
