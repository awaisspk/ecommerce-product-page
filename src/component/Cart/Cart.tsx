import {Button} from '../Button';
import {styled} from '@stitchesConfig';
import {useContext, useState} from 'react';
import {ProductContext} from '@src/Context/ProductContext';

export const Cart = () => {
  const [count, setCount] = useState(0);
  const {setProduct} = useContext(ProductContext);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setProduct({totalItems: count, pricePerItem: 125});
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          min="0"
          max="10"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <Button type="submit" variant="primary">
          Add to Cart
        </Button>
      </form>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  alignSelf: 'start',
  width: '$max',
});

const Input = styled('input', {
  all: 'unset',
  backgroundColor: '$blue3',
  textAlign: 'center',
});
