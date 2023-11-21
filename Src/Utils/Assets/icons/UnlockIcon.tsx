import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const UnlockIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 20}
      height={height ? height : 21}
      viewBox="0 0 20 21"
      fill="none">
      <Path
        d="M12.68 4.879a2.44 2.44 0 114.878 0v.244a.732.732 0 001.464 0v-.244a3.903 3.903 0 10-7.806 0V6.83H4.142A3.171 3.171 0 00.97 10.001v7.318a3.171 3.171 0 003.17 3.171h9.27a3.171 3.171 0 003.171-3.17V10a3.171 3.171 0 00-3.17-3.17h-.733V4.878zM8.776 15.124a1.464 1.464 0 110-2.927 1.464 1.464 0 010 2.927z"
        fill="#fff"
      />
    </Svg>
  );
};

export default UnlockIcon;
