import {styled} from '@stitchesConfig';
import React, {useState} from 'react';
import {Avatar} from '../Avatar';
import {Flex} from '../Flex';
import {Cart} from '../Icons/Cart';
import {MenuIcon} from '../Icons/MenuIcon';
import {Menu} from '../Menu';
import {HeaderContext} from './HeaderContext';
import {Logo} from './Logo';

const StyledHeader = styled(Flex, {
  justifyContent: 'space-between',
  alignItems: 'center',
  px: '$2',
  py: '$4',
  maxWidth: '880px',
  margin: 'auto',
});

export const Header: React.FC = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  return (
    <HeaderContext.Provider value={{isMenuHidden, setIsMenuHidden}}>
      <StyledHeader as="header">
        <Flex gap="2">
          <MenuIcon />
          <Logo />
          <Menu />
        </Flex>
        <Flex gap="4">
          <Cart />
          <Avatar />
        </Flex>
      </StyledHeader>
    </HeaderContext.Provider>
  );
};
