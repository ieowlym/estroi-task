import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const Slider = styled("div")`
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

export const ImagesSlider = ({ categories }) => {
  const [index, setIndex] = useState(5);
  const { name, imgName } = categories[index];

  const checkNumber = (number) => {
    if (number > categories.length - 1) {
      return 0;
    }
    if (number < 0) {
      return categories.length - 1;
    }
    return number;
  };

  const nextImage = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevImage = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Slider>
      <Button onClick={prevImage}>
        <ChevronLeftIcon />
      </Button>
      <img src={imgName} alt={name} style={{ height: "400px" }} />
      <Button onClick={nextImage}>
        <ChevronRightIcon />
      </Button>
    </Slider>
  );
};
