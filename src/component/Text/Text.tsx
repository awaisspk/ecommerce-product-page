import {styled} from '@stitchesConfig';

export const Text = styled('span', {
  all: 'unset',
  color: '$blue0',
  display: 'inline-block',

  '& a': {
    color: '$blue0',
    textDecoration: 'none',
  },

  variants: {
    variant: {
      logo: {
        fontSize: '$5',
        color: '$blue0',
        fontWeight: '$900',
        textTransform: 'lowercase',
        userSelect: 'none',
      },
      title: {
        fontSize: '$5',
        color: '$blue0',
        fontWeight: '$700',
        textTransform: 'capitalize',
      },
      para: {
        fontSize: '$3',
        color: '$blue1',
      },
      emphasis: {
        fontSize: '$2',
        color: '$brand',
        backgroundColor: '$Selection',
        px: '$2',
        fontWeight: '$400',
        borderRadius: '$lg',
        textTransform: 'uppercase',
        height: '25px',
      },
    },
  },
});
