import {ProductContext} from '@src/Context/ProductContext';
import {styled} from '@stitchesConfig';
import {useContext} from 'react';

export const Checkout = () => {
  const {product} = useContext(ProductContext);
  const total = product.totalItems * product.pricePerItem;
  return (
    <>
      <StyledCheckout>{total}</StyledCheckout>
    </>
  );
};

const StyledCheckout = styled('div', {
  width: '100px',
  height: '100px',
  borderRadius: '10px',
});
