import React, {useContext} from 'react';
import {styled} from '@stitchesConfig';
import {motion, Variants} from 'framer-motion';
import {HeaderContext} from '../Header';
import {Button} from '../Button';
import {Nav} from './Nav';

export const Menu: React.FC = () => {
  const {isMenuHidden, setIsMenuHidden} = useContext(HeaderContext);

  const menuVariant: Variants = {
    close: {
      x: '-120%',
    },
    open: {
      x: '0%',
    },
  };

  return (
    <StyledMenu
      variants={menuVariant}
      initial="close"
      animate={isMenuHidden ? 'close' : 'open'}
    >
      <Button variant="close" onClick={() => setIsMenuHidden(!isMenuHidden)}>
        X
      </Button>
      <Nav />
    </StyledMenu>
  );
};

const StyledMenu = styled(motion.div, {
  width: '60%',
  height: '100vh',
  backgroundColor: '$White',
  position: 'absolute',
  top: '0',
  left: '-30%',
  paddingLeft: '30%',

  '@bp2': {
    position: 'relative',
    left: '70%',
    top: 'initial',
    paddingLeft: 'initial',
    height: 'initial',
    width: 'intial',
    backgroundColor: '$body',

    '& button': {
      display: 'none',
    },
  },
});
