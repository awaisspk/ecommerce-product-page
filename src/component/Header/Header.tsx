import {ProductContext} from '@src/Context/ProductContext';
import {styled} from '@stitchesConfig';
import React, {useContext, useState} from 'react';
import {Avatar} from '../Avatar';
import {Button} from '../Button';
import {Flex} from '../Flex';
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
  const [isCheckout, setIsCheckout] = useState(false);
  const {product} = useContext(ProductContext);
  return (
    <HeaderContext.Provider value={{isMenuHidden, setIsMenuHidden}}>
      <StyledHeader as="header">
        <Flex gap="2">
          <MenuIcon />
          <Logo />
          <Menu />
        </Flex>
        <Flex gap="4">
          <Button icon="cart" onClick={() => setIsCheckout(!isCheckout)} />
          <div>{product.totalItems}</div>
          <Avatar />
        </Flex>
      </StyledHeader>
    </HeaderContext.Provider>
  );
};
