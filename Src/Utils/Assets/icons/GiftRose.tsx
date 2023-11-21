import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const GiftRose: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 50}
      height={height ? height : 50}
      viewBox="0 0 50 50"
      fill="none">
      <Path
        d="M22.191 33.316l8.54.067s-.68 2.207-1.243 3.074c-.918 1.406-1.375 2.125-1.765 3.566-.606 2.22-.555 3.926-.555 3.926s.473-.164 1.047 0c.7.2 1.078.664 1.015.95-.058.253-.835.081-1.375.62-.425.426-.59 1.18-.656 1.669-.066.492-.133 1.113-1.047 1.242-.918.133-2.289.23-2.586-.23-.293-.458-.132-8.442-.132-8.442l-1.243-6.442z"
        fill="#307D31"
      />
      <Path
        d="M22.094 31.547c-.164.293-4.032.988-4.032.988s-1.293.692-1.78 2.95c-.266 1.222-.208 3.699-.438 4.566-.328 1.242-1.703 1.965-1.637 2.258.066.293 1.266.273 2.191-.133 2.094-.918 2.461-2.817 3.141-4.45.656-1.57 1.898-2.394 1.898-2.394s-.293 1.14-.168 2.398c.106 1.083.446 2.461 0 3.801-.425 1.278-1.023 2.047-.785 2.164.18.086 2.313-.129 3.164-1.996.942-2.062 1.008-3.754 1.57-4.965.622-1.34 1.805-1.91 1.805-1.91s.84.492 1.868 1.93c1.144 1.602 2.101 2.95 2.718 3.777 1.446 1.946 3.45 2.559 3.512 2.23.098-.523-.965-1.363-1.18-2.386-.527-2.52.196-3.727-.402-5.66-.86-2.793-2.887-2.844-3.59-2.977-.164-.023-7.855-.191-7.855-.191z"
        fill="#5C9823"
      />
      <Path
        d="M18.48 17.32c-.44-.394-6.98-5.16-6.98-5.16l-.098-2.898s-1.601-3.028.243-5.282c1.601-1.957 3.738-1.402 3.738-1.402s1.07-1.348 2.937-1.441c2.387-.121 3.551 1.886 3.551 1.886l10.762 1.77 6.043 3.93s.894-.29 1.636.234c.774.543.52 1.683.434 2.195-.082.489-8.066 6.86-8.066 6.86l.836 12.484-2.79 3.113s-.39.383-1.19.485c-.466.058-1.063-.13-1.063-.13l-1.739-4.991L18.48 17.32z"
        fill="#96010C"
      />
      <Path
        d="M32.48 2.68l-1.453.109-1.02.856.364 1.644s.047 1.23-.922 1.82c-.969.59-2.87 1.559-2.87 1.559l-1.313 2.172s-.844-.277-2.22-.985c-1.284-.664-2.929-2.18-2.929-2.18l-2.941-.198s-.563-.051-1.035.449c-.68.726-.438 2.265.894 3.675 1.281 1.356 4.055 3.008 4.672 3.465a23.611 23.611 0 002.094 1.344c.515.29 1.133.703 1.402.652.27-.054.668-.972 1.93-1.859s2.496-1.637 4.512-2.336c2.015-.7 3.949-1.504 4.539-1.879.59-.375-.215-2.926-.942-4.484-.726-1.559-2.71-3.984-2.761-3.824z"
        fill="#AF0C1B"
      />
      <Path
        d="M25.418 9.367c-.496.656-.402 1.422-.402 1.422s1.082.649 2.148 1.02c1.934.671 6.285.484 8.379-.457 2.094-.942 3.117-1.754 3.438-2.739.374-1.156.687-3.492-1.563-5.293-2.578-2.066-6.469-.937-6.469-.398s1.559.11 1.559 2.066c0 1.957-1.719 3.14-3.465 3.383-1.746.242-2.875 0-3.625.996z"
        fill="#DB132C"
      />
      <Path
        d="M16.5 7.676s-.2-.79.457-1.422c.992-.969 2.258-1.477 2.98-2.258.723-.781 1.75-2.262 4.27-2.605 3.734-.512 6.148.886 6.688 2.605.539 1.719-.485 2.309-1.532 2.336-1.047.027-1.629-.465-3.547-.133-3.25.563-4.378 2.309-4.671 2.473-.297.16-1.262-.402-2.579-.754-.949-.254-1.636-.191-2.066-.242z"
        fill="#F71538"
      />
      <Path
        d="M27.195 18.898s.664-2.207 2.832-3.605c2.172-1.399 3.754-1.434 6.516-2.688 2.762-1.254 3.715-2.078 4.156-2.367.453-.297.864-.566 1.18-.047.203.336-.148 1.711-1.082 3.047-.953 1.364-1.89 2.114-2.602 4.461-.941 3.098.867 5.914-1.062 10.89-.625 1.61-2.09 3.083-3.453 4.04-1.364.957-3.328 1.172-3.328 1.172s.699-.489 1.082-2.286c.187-.882.468-2.449.253-4.117-.613-4.77-4.492-8.5-4.492-8.5z"
        fill="#CD0E1F"
      />
      <Path
        d="M12.398 18.234c.047 1.047-.445 4.856.192 7.914.5 2.407 2.976 6.66 7.613 7.91 4.266 1.153 8.832-.035 8.832-.035s1.723-2.91.852-7.152c-.95-4.625-5.57-8.062-10.899-10.695-6.402-3.164-7.562-6.977-7.562-6.977s-2.106-.55-2.633 1.344c-.809 2.906 3.535 6.11 3.605 7.691z"
        fill="#E2122D"
      />
    </Svg>
  );
};

export default GiftRose;