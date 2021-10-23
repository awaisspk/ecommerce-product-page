import {Button} from '../Button';

export const Cart = () => {
  return (
    <>
      <input type="number" min="0" max="10" />
      <Button variant="primary">Add to Cart</Button>
    </>
  );
};
