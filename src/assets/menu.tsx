import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface MenuIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Menu: React.FC<MenuIconProps> = ({
  width = 24,
  height = 24,
  color = '#000000',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
      />
    </Svg>
  );
};
