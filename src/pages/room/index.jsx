import { Fragment } from "react";
import { useParams } from "react-router-dom";

import image6 from "../../assets/images/image_6.jpg";

import { ROOMS } from "../../constants/rooms";
import RoomCard from "../../components/shared/RoomCard";
import { Container, FlexBox, Text, Grid, Divider } from "../../components/UI";
import { ROUTES } from "../../constants/routes";

const CATEGORIES_MAPPER = [
  {
    title: "Properties",
    amount: 12,
  },
  {
    title: "Home",
    amount: 22,
  },
  {
    title: "House",
    amount: 37,
  },
  {
    title: "Villa",
    amount: 42,
  },
  {
    title: "Apartment",
    amount: 14,
  },
  {
    title: "Condominium",
    amount: 140,
  },
];

const TAGS = [
  "dish",
  "menu",
  "food",
  "sweet",
  "tasty",
  "delicious",
  "desserts",
  "drinks",
];

const Room = () => {
  const { roomId } = useParams();
  const roomData = ROOMS.find((room) => room.id.toString() === roomId);

  if (!roomData) {
    return null;
  }

  return (
    <Container py={80}>
      <Grid template="3fr 1fr" gap={40}>
        <FlexBox column gap={30}>
          <Text as="link" to="..">
            ← Back
          </Text>
          <img src={roomData.imgSrc} width="100%" style={{ borderRadius: 5 }} />
          <Text as="p" lh="27px">
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </Text>
          <Grid columns={2} gap={20} width="50%">
            <Text lh="27px">
              Max: <Text as="span">{`${roomData.maxPersons} Persons`}</Text>
            </Text>
            <Text lh="27px">
              View: <Text as="span">{roomData.view}</Text>
            </Text>
            <Text lh="27px">
              Size: <Text as="span">{`${roomData.size} m2`}</Text>
            </Text>
            <Text lh="27px">
              Bed: <Text as="span">{roomData.bed}</Text>
            </Text>
          </Grid>
          <Text as="p" lh="27px">
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </Text>
          <FlexBox column gap={20} py={30}>
            <Text lh="42px" size={28} color="black">
              Take A Tour
            </Text>
            <div
              style={{
                background: `url(${image6})`,
                height: 500,
                borderRadius: 5,
              }}
            ></div>
          </FlexBox>
        </FlexBox>
        <FlexBox column gap={30}>
          <FlexBox column gap={10}>
            <Text lh="32px" size={18} color="black">
              Categories
            </Text>
            {CATEGORIES_MAPPER.map(({ title, amount }, index) => (
              <Fragment key={title}>
                {index > 0 ? <Divider color="gray-150" type="dotted" /> : null}
                <FlexBox align="center" justify="space-between">
                  <Text color="brown-500" lh="27px">
                    {title}
                  </Text>
                  <Text color="gray-200" lh="27px">{`(${amount})`}</Text>
                </FlexBox>
              </Fragment>
            ))}
          </FlexBox>
          <FlexBox column gap={10}>
            <Text lh="32px" size={18} color="black">
              Available Room
            </Text>
            {ROOMS.slice(0, 2).map((room) => (
              <RoomCard {...room} key={room.id} to={`../${room.id}`} />
            ))}
          </FlexBox>
          <FlexBox column gap={10}>
            <Text lh="32px" size={18} color="black">
              Tag Cloud
            </Text>
            <FlexBox gap={10} wrap>
              {TAGS.map((tag) => (
                <Text
                  as="link"
                  key={tag}
                  color="black"
                  size={11}
                  lh="20px"
                  uppercase
                  style={{
                    padding: "4px 10px",
                    borderRadius: 4,
                    border: "1px solid var(--gray-200)",
                  }}
                >
                  {tag}
                </Text>
              ))}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Grid>
    </Container>
  );
};

export default Room;
