import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const ActorGiftIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 45}
      height={height ? height : 45}
      viewBox="0 0 45 45"
      fill="none">
      <G filter="url(#filter0_d_406_2)">
        <Circle cx={22.2237} cy={18.2237} r={17.2237} fill="#979797" />
        <Circle cx={22.2237} cy={18.2237} r={17.7237} stroke="#fff" />
      </G>
      <Path
        d="M19.309 10c-1.48-.008-2.92 1.456-2.262 3.273h-2.482c-.415 0-.813.17-1.106.471-.294.302-.459.71-.459 1.137v1.609c0 .213.082.418.23.568.146.151.345.236.553.236h7.044v-2.413h1.566v2.413h7.044a.772.772 0 00.554-.236.815.815 0 00.229-.568V14.88c0-.426-.165-.835-.458-1.137a1.545 1.545 0 00-1.108-.47h-2.48c.915-2.63-2.529-4.488-4.118-2.22l-.446.61-.446-.627c-.493-.715-1.174-1.029-1.855-1.037zm-.047 1.665c.696 0 1.049.868.556 1.375-.494.507-1.339.145-1.339-.571 0-.213.083-.418.23-.569a.772.772 0 01.553-.235zm4.696 0c.697 0 1.049.868.556 1.375-.493.507-1.338.145-1.338-.571 0-.213.082-.418.229-.569a.772.772 0 01.553-.235zm-10.175 6.433v6.434c0 .426.165.835.458 1.137.294.302.692.471 1.107.471h12.524c.415 0 .813-.17 1.107-.471.293-.302.458-.71.458-1.137v-6.434h-7.044v6.434h-1.566v-6.434h-7.044z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
};

export default ActorGiftIcon;
