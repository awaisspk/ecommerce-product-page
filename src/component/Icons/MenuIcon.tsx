import {styled} from '@stitchesConfig';
import {useContext} from 'react';
import {Button} from '../Button';
import {HeaderContext} from '../Header';

const MenuButton = styled(Button, {
  '@bp2': {
    '& svg': {
      display: 'none',
    },
  },
});

export const MenuIcon = () => {
  const {isMenuHidden, setIsMenuHidden} = useContext(HeaderContext);
  return (
    <MenuButton onClick={() => setIsMenuHidden(!isMenuHidden)}>
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>
    </MenuButton>
  );
};
