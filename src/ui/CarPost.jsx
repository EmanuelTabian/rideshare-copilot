import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGetCarPost } from "../features/carposts/useGetCarPost";
import { useGetImageUrl } from "../features/carposts/useGetImageUrl";
import { dateFormatter } from "../utils/helpers";
import Button from "./Button";
import ImgSlider from "./ImgSlider";
import Spinner from "./Spinner";

import { TbFileDescription } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const StyledCarList = styled.div`
  margin: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

function CarPost({ carPost }) {
  const { user } = useUser();
  const {
    user_id,
    id,
    created_at: createdAt,
    car_name: carName,
    body,
    color,
    description,
    door_number: doorNumber,
    emission_standard: emissionStandard,
    engine,
    fuel,
    gear_number: gearNumber,
    image,
    location,
    milleage,
    model,
    mpg,
    contact,
    power,
    price,
    seat_number: seatNumber,
    transmission,
    version,
    year,
  } = carPost;
  const canEditOrRemove = user_id === user.id;
  const { isLoading, imageUrl, error } = useGetImageUrl(id);

  return (
    <>
      <ImgSlider
        imageUrl={imageUrl?.url ? imageUrl?.url : "no-photo.png"}
        alt={carName}
      />
      <Container>
        <div>
          <TbFileDescription></TbFileDescription> <span> {description}</span>{" "}
        </div>
        <span>
          <MdDateRange></MdDateRange>
          {dateFormatter(createdAt)}
        </span>

        <span>
          {" "}
          <MdLocationPin />
          {location}
        </span>
      </Container>
      <h1>Car Specs</h1>
      <StyledCarList>
        <ul>
          <li>Name: {carName}</li>
          <li>Model: {model}</li>
          <li>Version: {version}</li>
          <li>Year: {year}</li>
          <li>Engine: {engine}</li>
          <li>Fuel: {fuel}</li>
          <li>Body: {body}</li>
          <li>Transmission: {transmission}</li>
          <li>Gears: {gearNumber}</li>
          <li>Color: {color}</li>
          <li>Seats: {seatNumber}</li>
          <li>Doors: {doorNumber}</li>
          <li>Milleage: {milleage} km</li>
          <li>Power: {power} CP</li>
          <li>Mpg: {mpg}</li>
          <li>Price: {price}</li>
          <li>Emmision Standard: {emissionStandard}</li>
        </ul>
        <div>
          <span>{contact}</span>
        </div>

        {canEditOrRemove && (
          <div>
            <Button> Edit post</Button>
            <Button> Delete post</Button>
          </div>
        )}
      </StyledCarList>
    </>
  );
}

export default CarPost;
