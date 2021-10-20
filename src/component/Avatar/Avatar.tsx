import {styled} from '@stitchesConfig';
import Image from 'next/image';

const StyledAvatar = styled('div', {
  borderRadius: '$full',
  background: '$blue3',
  width: '40px',
  height: '40px',
});

export const Avatar = () => {
  return (
    <StyledAvatar>
      <Image src="/images/image-avatar.png" width="40px" height="40px" />
    </StyledAvatar>
  );
};
