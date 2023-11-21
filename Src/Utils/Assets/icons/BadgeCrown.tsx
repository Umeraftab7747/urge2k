import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const BadgeCrown: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 18}
      height={height ? height : 18}
      viewBox="0 0 18 18"
      fill={`${fill ? fill : '#9F9FA1'}`}>
      <Path d="M9.25.208C4.527.208.708 4.052.708 8.75s3.844 8.542 8.542 8.542 8.542-3.844 8.542-8.542S13.948.208 9.25.208zm3.417 11.48c0 .29-.188.479-.479.479H6.312c-.29 0-.479-.188-.479-.479v-.376h6.834v.376zm0-1.23H5.834l-.855-5.125 2.563 1.709L9.25 4.479l1.709 2.563 2.562-1.709-.854 5.125z" />
    </Svg>
  );
};

export default BadgeCrown;
