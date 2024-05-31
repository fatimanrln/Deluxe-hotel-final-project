import { useNavigate } from "react-router-dom";

import Guests from "../../widgets/guests";
import AboutUs from "../../widgets/about-us";
import { ROOMS } from "../../constants/rooms";
import { ROUTES } from "../../constants/routes";
import Title from "../../components/shared/Title";
import { Container, Grid } from "../../components/UI";
import FeaturesList from "../../widgets/features-list";
import RoomCard from "../../components/shared/RoomCard";

import SearchBar from "./search-bar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          transform: "translateY(-240px)",
          zIndex: 10,
        }}
      >
        <SearchBar navigate={navigate} />
      </div>
      <AboutUs />
      <FeaturesList />
      <Container color="gray-50">
        <Title>Our Rooms</Title>
        <Grid columns={3} gap={30}>
          {ROOMS.map((room) => (
            <RoomCard
              {...room}
              key={room.id}
              to={`/${ROUTES.ROOMS}/${room.id}`}
            />
          ))}
        </Grid>
      </Container>
      <Guests />
    </>
  );
};

export default Home;
