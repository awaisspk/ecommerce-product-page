import {ImagesData} from '@src/data';
import {styled} from '@stitchesConfig';
import Image from 'next/image';
import {useState} from 'react';
import {Flex} from '../Flex';

export const ProductPreview = () => {
  const [preview, setPreview] = useState(1);
  return (
    <Flex gap="2" direction="col" css={{width: '100%'}}>
      <ActiceImage>
        <Image
          src={ImagesData[preview].fullImage}
          layout="fill"
          alt="img.info"
        />
      </ActiceImage>

      <Flex direction="row" gap="1" css={{width: '100%'}}>
        {ImagesData.map((img, index) => (
          <ImageContainer key={index}>
            <Image
              src={img.thumbnail}
              layout="fill"
              alt={img.info}
              onClick={() => setPreview(img.id)}
            />
          </ImageContainer>
        ))}
      </Flex>
    </Flex>
  );
};

const ActiceImage = styled('div', {
  position: 'relative',
  width: '100%',
  height: '50vh',
  overflow: 'hidden',
  borderRadius: '$lg',
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100px',
  backgroundColor: 'Blue',
  borderRadius: '$lg',
  overflow: 'hidden',
  cursor: 'pointer',
});
