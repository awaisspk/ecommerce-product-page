import {styled} from '@stitchesConfig';
import NextLink from 'next/link';
import {Flex} from '../Flex';

export const Nav = () => {
  return (
    <Navcontainer>
      <LinkContainer direction={{'@initial': 'col', '@bp2': 'row'}} gap="2">
        <NextLink href="/">
          <Link>Collections</Link>
        </NextLink>
        <NextLink href="/">
          <Link>Men</Link>
        </NextLink>
        <NextLink href="/">
          <Link>Women</Link>
        </NextLink>
        <NextLink href="/">
          <Link>About</Link>
        </NextLink>
        <NextLink href="/">
          <Link>Contact</Link>
        </NextLink>
      </LinkContainer>
    </Navcontainer>
  );
};

const Navcontainer = styled('nav', {
  marginLeft: '-20px',
  '@bp2': {
    marginLeft: 'initial',
  },
});

const LinkContainer = styled('ul', Flex, {
  alignItems: 'flex-start',
});

const Link = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  '&:hover': {
    color: '$brand',
  },
});
