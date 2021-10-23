import {Text} from '@components/Text';

export const Info = () => {
  return (
    <div className="right">
      <Text variant="emphasis">SNEAKER COMPANY</Text>
      <Text variant="title" css={{py: '$3'}}>
        Fall Limited Edition Sneakers
      </Text>
      <Text variant="para">
        These low-profile sneakers are your perfect casual wear
        companion.Featuring a durable rubber outer sole,they withstand
        everything the weather has to offer
      </Text>
    </div>
  );
};
