import {styled} from '@stitchesConfig';

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  variants: {
    direction: {
      col: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    gap: {
      0: {
        gap: '$1',
      },
      1: {
        gap: '$2',
      },
      2: {
        gap: '$4',
      },
      3: {
        gap: '$6',
      },
      4: {
        gap: '$8',
      },
    },
  },
});
