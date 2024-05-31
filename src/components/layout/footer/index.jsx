import { Container, FlexBox, Grid, Text } from "../../UI";
import { ROUTES } from "../../../constants/routes";
import { CONTACTS } from "../../../constants/contacts";

import s from "./styles.module.scss";

const USEFUL_LINKS = [
  {
    title: "Blog",
  },
  {
    title: "Rooms",
    to: ROUTES.ROOMS,
  },
  {
    title: "Amentities",
  },
  {
    title: "Gift Card",
  },
];

const PRIVACY = [
  {
    title: "Career",
  },
  {
    title: "About Us",
    to: ROUTES.ABOUT,
  },
  {
    title: "Contact Us",
    to: ROUTES.CONTACT,
  },
  {
    title: "Services",
  },
];

const Footer = () => {
  return (
    <footer>
      <Container color="gray-900" py={90}>
        <Grid columns={4}>
          <FlexBox column gap={40} pr={15}>
            <Text as="h2" size={18} lh="27px" color="white">
              Deluxe Hotel
            </Text>
            <Text as="p" color="gray-200" size={16} lh="24px">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Text>
          </FlexBox>
          <FlexBox column gap={40}>
            <Text as="h2" size={18} lh="27px" color="white">
              Useful Links
            </Text>
            <FlexBox column gap={16}>
              {USEFUL_LINKS.map(({ title, to }) => (
                <Text
                  key={title}
                  as="link"
                  to={to}
                  color="gray-200"
                  size={16}
                  lh="24px"
                >
                  {title}
                </Text>
              ))}
            </FlexBox>
          </FlexBox>
          <FlexBox column gap={40}>
            <Text as="h2" size={18} lh="27px" color="white">
              Privacy
            </Text>
            <FlexBox column gap={16}>
              {PRIVACY.map(({ title, to }) => (
                <Text
                  key={title}
                  as="link"
                  to={to}
                  color="gray-200"
                  size={16}
                  lh="24px"
                >
                  {title}
                </Text>
              ))}
            </FlexBox>
          </FlexBox>
          <FlexBox column gap={40}>
            <Text as="h2" size={18} lh="27px" color="white">
              Have a Questions?
            </Text>
            <FlexBox column gap={16} as="ul">
              {CONTACTS.map(({ value, icon: Icon }) => (
                <FlexBox key={value} as="li" gap={20}>
                  <Icon size={18} color="white" />
                  <Text color="white" size={16} lh="24px">
                    {value}
                  </Text>
                </FlexBox>
              ))}
            </FlexBox>
          </FlexBox>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
