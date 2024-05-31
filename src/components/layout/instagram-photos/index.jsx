import { useState } from "react";
import classNames from "classnames";
import { FaInstagram } from "react-icons/fa";

import Title from "../../shared/Title";
import { FlexBox, Grid } from "../../UI";

import insta1 from "../../../assets/images/insta-1.jpg";
import insta2 from "../../../assets/images/insta-2.jpg";
import insta3 from "../../../assets/images/insta-3.jpg";
import insta4 from "../../../assets/images/insta-4.jpg";
import insta5 from "../../../assets/images/insta-5.jpg";

import s from "./styles.module.scss";

const PHOTOS = [insta1, insta2, insta3, insta4, insta5];

const InstagramPhotos = () => {
  const [activeImageIndex, setActiveImageIndex] = useState();

  const handleClick = (newIndex) => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === newIndex ? undefined : newIndex
    );
  };

  return (
    <section>
      <Title>Instagram</Title>
      <Grid columns={PHOTOS.length} gap={0} width="100%">
        {PHOTOS.map((src, index) => (
          <div key={index}>
            <div
              className={classNames(s.img, {
                [s.active]: activeImageIndex === index,
              })}
              onClick={() => handleClick(index)}
            >
              <img src={src} onClick={(e) => e.stopPropagation()} />
              <div className={s.imgSkin}>
                <FaInstagram />
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </Grid>
    </section>
  );
};

export default InstagramPhotos;
