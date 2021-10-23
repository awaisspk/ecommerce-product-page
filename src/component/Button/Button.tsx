import {styled, config} from '@stitchesConfig';
import type * as Stitches from '@stitches/react';
import {motion} from 'framer-motion';
import React from 'react';
import {CartIcon} from '../Icons/Cart';

type CSS = Stitches.CSS<typeof config>;

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  icon?: 'cart';
  css?: CSS;
};

export const Button: React.FC<ButtonProps> = ({icon, children, ...rest}) => {
  return (
    <>
      <StyledButton {...rest}>
        {icon && <CartIcon />} {children}
      </StyledButton>
    </>
  );
};

const StyledButton = styled(motion.button, {
  all: 'unset',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  variants: {
    variant: {
      close: {
        py: '$8',
        px: '$5',
        borderRadius: '$full',
        fontWeight: '$700',
      },
      primary: {
        backgroundColor: '$brand',
        color: 'White',
        py: '$4',
        px: '$9',
        borderRadius: '$md',
        fontWeight: '$700',
      },
    },
  },
});
