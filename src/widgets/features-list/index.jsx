import { MdSpa } from "react-icons/md";
import { IoMdCar, IoMdClock, IoMdRestaurant } from "react-icons/io";

import { Container, FlexBox, Text } from "../../components/UI";

import s from "./styles.module.scss";

const FEATURES_MAPPER = [
  {
    icon: IoMdClock,
    title: "25/7 Front Desk",
    description: "A small river named Duden flows by their place and supplies.",
  },
  {
    icon: IoMdRestaurant,
    title: "Restaurant Bar",
    description: "A small river named Duden flows by their place and supplies.",
  },
  {
    icon: IoMdCar,
    title: "Transfer Services",
    description: "A small river named Duden flows by their place and supplies.",
  },
  {
    icon: MdSpa,
    title: "Spa Suites",
    description: "A small river named Duden flows by their place and supplies.",
  },
];

const FeaturesList = () => {
  return (
    <Container py={80}>
      <FlexBox gap={25} justify="space-between">
        {FEATURES_MAPPER.map(({ icon: Icon, title, description }) => (
          <FlexBox
            key={title}
            column
            gap={16}
            align="center"
            className={s.item}
          >
            <div className={s.iconWrapper}>
              <Icon size={35} />
            </div>
            <Text as="h3" color="black" size={24} centered>
              {title}
            </Text>
            <Text size={16} centered lh="28px">
              {description}
            </Text>
          </FlexBox>
        ))}
      </FlexBox>
    </Container>
  );
};

export default FeaturesList;
