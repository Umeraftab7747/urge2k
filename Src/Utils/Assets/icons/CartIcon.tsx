import React from 'react';
import Svg, {Path, Defs, ClipPath, G} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
  fill?: string;
}
const CartIcon: React.FC<Props> = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 12}
      height={height ? height : 12}
      viewBox="0 0 12 12"
      fill="none">
      <G clipPath="url(#clip0_26_683)">
        <Path
          d="M0 .5h2.382l1.5 5.5H9.14l1.543-4.633.95.317L9.86 7H3.89l-.25 1H11v1H2.36l.623-2.495L1.618 1.5H0v-1zM7 1v1.5h1.5v1H7V5H6V3.5H4.5v-1H6V1h1zm-5 9.5a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_26_683">
          <Path fill="#fff" d="M0 0H12V12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CartIcon;
