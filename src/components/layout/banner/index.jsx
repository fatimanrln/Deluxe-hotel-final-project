import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Text } from "../../../components/UI";
import { ROOMS } from "../../../constants/rooms";
import { ROUTES } from "../../../constants/routes";
import { APP_NAVS } from "../../../constants/app";

import bg1 from "../../../assets/images/bg_1.jpg";
import bg2 from "../../../assets/images/bg_2.jpg";

import s from "./styles.module.scss";

const IMAGES_MAPPER = [
  {
    title: "Welcome To Deluxe",
    subtitle: "Hotels & Resorts",
    imageSrc: bg1,
  },
  {
    title: "Enjoy A Luxury Experience",
    subtitle: "Join with us",
    imageSrc: bg2,
  },
];

const Banner = () => {
  const { pathname } = useLocation();

  const pathSegments = pathname.split("/").slice(1);
  const firstRoute = pathSegments?.at(0);
  const isHome = pathSegments?.includes(ROUTES.HOME);

  const titleByRoute = () => {
    if (pathSegments?.length > 1) {
      if (pathSegments.at(0) === ROUTES.ROOMS) {
        const roomByPath = ROOMS.find(
          (room) => room.id.toString() === pathSegments.at(1)
        );
        return roomByPath.title;
      }
    } else {
      return APP_NAVS.find((nav) => nav.to === firstRoute)?.title;
    }
  };

  return (
    <div className={classNames(s.bannerContainer, { [s.light]: !isHome })}>
      {isHome ? (
        <Zoom arrows={false} scale={1.5} duration={4000} infinite>
          {IMAGES_MAPPER.map(({ imageSrc, title, subtitle }) => (
            <div key={title}>
              <img src={imageSrc} draggable="false" />
              <div className={s.content}>
                <Text size={85} as="h1" color="white">
                  {title}
                </Text>
                <Text
                  className={s.subtitle}
                  size={26}
                  centered
                  color="white"
                  as="h2"
                >
                  {subtitle}
                </Text>
              </div>
            </div>
          ))}
        </Zoom>
      ) : (
        <div>
          <img src={bg1} />
          <div className={s.content}>
            <Text color="white" size={60}>
              {titleByRoute()}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
