import {globalCss} from '@stitchesConfig';

export const globalStyles = globalCss({
  body: {
    fontFamily: '$primary',
  },
  '::selection': {
    color: '$brand',
    backgroundColor: '$Selection',
  },
});
