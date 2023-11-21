import React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const EditIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 14}
      height={height ? height : 14}
      viewBox="0 0 14 14"
      fill="none">
      <Path
        d="M12.075 4.083c-.175.234-.408.409-.408.584s.175.35.35.583c.291.292.583.525.525.817 0 .291-.292.583-.584.875L9.567 9.333l-.817-.758 2.45-2.45-.583-.583-.817.816-2.217-2.216 2.334-2.217a.564.564 0 01.816 0l1.342 1.342c.233.233.233.641 0 .816zM1.75 10.033l5.6-5.6L9.508 6.65l-5.541 5.6H1.75v-2.217zM4.082 3.339l.004-1.753H2.914l.004 1.753-1.753-.004v1.171l1.753-.004-.004 1.753h1.172l-.004-1.753 1.753.004V3.335l-1.753.004z"
        fill={`${fill ? fill : '#fff'}`}
      />
    </Svg>
  );
};

export default EditIcon;
