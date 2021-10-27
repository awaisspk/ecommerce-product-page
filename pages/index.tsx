import {Cart} from '@src/component/Cart/Cart';
import {Flex} from '@src/component/Flex';
import {Info} from '@src/component/ProductInfo';
import {ProductPreview} from '@src/component/ProductPreview/Preview';
import {styled} from '@stitchesConfig';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Grid>
      <ProductPreview />
      <InfoContainer direction="col" gap="4">
        <Info />
        <Cart />
      </InfoContainer>
    </Grid>
  );
};

export default Home;

Info.toString = () => '.right';

const Grid = styled('div', {
  display: 'grid',
  maxWidth: '880px',
  margin: 'auto',
  marginTop: '$16',
  gridTemplateColumns: '1fr 1.5fr',
});

const InfoContainer = styled(Flex, {
  width: '$3',
  justifySelf: 'end',
  paddingTop: '$6',
});
