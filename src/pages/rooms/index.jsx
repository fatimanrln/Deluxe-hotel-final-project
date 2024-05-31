import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { ROOMS } from "../../constants/rooms";
import RoomCard from "../../components/shared/RoomCard";
import { Container, FlexBox, Grid, Text } from "../../components/UI";

import RoomsFilter from "./rooms-filter";

const Rooms = () => {
  const [searchParams] = useSearchParams();

  const filteredRoomsList = useMemo(() => {
    let roomsList = ROOMS;
    const filters = Object.fromEntries(searchParams.entries());

    if (filters.roomType) {
      roomsList = roomsList.filter((room) => room.title === filters.roomType);
    }

    if (filters.persons) {
      roomsList = roomsList.filter(
        (room) => room.maxPersons >= filters.persons
      );
    }

    return roomsList;
  }, [searchParams]);

  return (
    <Container py={80} color="gray-50">
      <FlexBox gap={30}>
        <Grid columns={3} gap={30}>
          {filteredRoomsList?.length ? (
            filteredRoomsList.map((room) => (
              <RoomCard key={room.id} {...room} to={room.id.toString()} full />
            ))
          ) : (
            <Text centered color="gray-300">
              Empty list
            </Text>
          )}
        </Grid>
        <RoomsFilter />
      </FlexBox>
    </Container>
  );
};

export default Rooms;
