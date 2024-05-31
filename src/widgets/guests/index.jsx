import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import { ImQuotesLeft } from "react-icons/im";
import "react-slideshow-image/dist/styles.css";

import { Container, FlexBox, Text } from "../../components/UI";

import avatar1 from "../../assets/images/person_1.jpg";
import avatar2 from "../../assets/images/person_2.jpg";
import avatar3 from "../../assets/images/person_3.jpg";
import avatar4 from "../../assets/images/person_4.jpg";

import s from "./styles.module.scss";

const GUESTS_REVIEWS_MAPPER = [
  {
    key: 1,
    avatarSrc: avatar1,
    name: "Nathan Smith",
    review:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    key: 2,
    avatarSrc: avatar2,
    name: "Nathan Smith",
    review:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    key: 3,
    avatarSrc: avatar3,
    name: "Nathan Smith",
    review:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    key: 4,
    avatarSrc: avatar4,
    name: "Nathan Smith",
    review:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

const Guests = () => {
  const slideRef = useRef(null);

  return (
    <Container py={80} color="gray-50">
      <Slide
        infinite
        duration={4000}
        ref={slideRef}
        indicators={true}
        arrows={false}
      >
        {GUESTS_REVIEWS_MAPPER.map(({ avatarSrc, review, name, key }) => (
          <FlexBox key={key} column align="center" gap={24} px={150}>
            <div className={s.avatarContainer}>
              <img src={avatarSrc} alt={name} />
              <div className={s.iconContainer}>
                <ImQuotesLeft />
              </div>
            </div>
            <Text as="p" color="gray-500" lh="26px" centered>
              {review}
            </Text>
            <div>
              <Text color="black" lh="32px" size={18} centered>
                {name}
              </Text>
              <Text uppercase color="gray-200" lh="23px" size={16} centered>
                Guests
              </Text>
            </div>
          </FlexBox>
        ))}
      </Slide>
    </Container>
  );
};

export default Guests;
