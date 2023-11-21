import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const ProfileIcon: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 23}
      height={height ? height : 23}
      viewBox="0 0 23 23"
      fill="none">
      <Circle cx={11.5} cy={11.5} r={11.5} fill="#fff" />
      <Path
        d="M11.375 11.792c1.697 0 3.24.491 4.376 1.183.567.347 1.051.755 1.401 1.197.344.437.598.958.598 1.515 0 .599-.291 1.07-.71 1.407-.397.319-.92.53-1.477.677-1.117.296-2.61.396-4.188.396-1.579 0-3.07-.1-4.188-.396-.556-.147-1.08-.358-1.477-.677-.42-.337-.71-.808-.71-1.407 0-.557.254-1.078.598-1.515.35-.442.834-.85 1.4-1.197 1.136-.692 2.68-1.183 4.377-1.183zm0-7.792a3.542 3.542 0 110 7.083 3.542 3.542 0 010-7.083z"
        fill="#000"
      />
    </Svg>
  );
};

export default ProfileIcon;
