import { Link } from "react-router-dom";

import { FlexBox, Text, Divider } from "../../UI";

import s from "./styles.module.scss";

const RoomCard = ({
  imgSrc,
  title,
  price,
  maxPersons,
  size,
  view,
  bed,
  to,
  full = false,
}) => {
  return (
    <Link className={s.roomCard} to={to}>
      <div className={s.imgContainer}>
        <img src={imgSrc} />
      </div>
      <div className={s.content}>
        <Text color="black" as="h3" size={22}>
          {title}
        </Text>
        <FlexBox gap={10} align="center">
          <FlexBox column gap={2}>
            <Text color="black" size={26}>
              ${price}.00
            </Text>
            <Divider height={2} color="brown-200" width="100%" />
          </FlexBox>
          <Text color="gray-300">per night</Text>
        </FlexBox>
        {full && (
          <FlexBox column gap={5}>
            <Text size={14} color="brown-500">
              Max:{" "}
              <Text as="span" color="black" centered>
                {maxPersons} Persons
              </Text>
            </Text>
            <Text size={14} color="brown-500">
              Size:{" "}
              <Text as="span" color="black" centered>
                {size} m2
              </Text>
            </Text>
            <Text size={14} color="brown-500">
              View:{" "}
              <Text as="span" color="black" centered>
                {view}
              </Text>
            </Text>
            <Text size={14} color="brown-500">
              Bed:{" "}
              <Text as="span" color="black" centered>
                {bed}
              </Text>
            </Text>
          </FlexBox>
        )}
      </div>
    </Link>
  );
};

export default RoomCard;
