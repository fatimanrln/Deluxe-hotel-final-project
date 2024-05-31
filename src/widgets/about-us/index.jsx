import { FaFacebook, FaInstagram, FaPlay, FaTwitter } from "react-icons/fa";

import { Container, FlexBox, Text } from "../../components/UI";

import videoBg from "../../assets/images/bg_2.jpg";

import s from "./styles.module.scss";

const AboutUs = () => (
  <Container>
    <FlexBox gap={70} mt={30}>
      <FlexBox
        className={s.videoPlaceholder}
        align="center"
        justify="center"
        style={{
          backgroundImage: `url(${videoBg})`,
        }}
      >
        <FlexBox className={s.player} align="center" justify="center">
          <FaPlay color="#fff" size={24} />
        </FlexBox>
      </FlexBox>
      <FlexBox column py={30} px={10} gap={40}>
        <FlexBox column gap={10} pt={20} pl={30}>
          <Text size={14}>Welcome to Deluxe Hotel</Text>
          <Text as="h2" color="black" size={38}>
            Welcome To Our Hotel
          </Text>
        </FlexBox>
        <FlexBox column gap={16}>
          <Text as="p" lh="27px">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </Text>
          <Text as="p" lh="27px">
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </Text>
          <FlexBox gap={10} align="center">
            <FaTwitter size={15} color="var(--brown-500)" />
            <FaInstagram size={15} color="var(--brown-500)" />
            <FaFacebook size={15} color="var(--brown-500)" />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  </Container>
);

export default AboutUs;
