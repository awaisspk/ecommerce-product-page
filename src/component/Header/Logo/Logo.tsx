import {Text} from '@components/Text';
import Link from 'next/link';

export const Logo = () => {
  return (
    <>
      <Text as="h1" variant="logo">
        <Link href="/">Sneaker</Link>
      </Text>
    </>
  );
};
