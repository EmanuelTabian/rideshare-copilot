import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGetCarPost } from "../features/carposts/useGetCarPost";
import { useGetImageUrl } from "../features/carposts/useGetImageUrl";
import { dateFormatter } from "../utils/helpers";
import Button from "./Button";
import Spinner from "./Spinner";

import { TbFileDescription } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const ImgContainer = styled.div`
  margin: 32px;
`;
const StyledImg = styled.img`
  object-fit: contain;
  border: none;
  border-radius: 32px;
  width: 100%;

  @media (min-width: 480px) {
    max-width: 700px;
  }
`;

const StyledCarList = styled.div`
  margin: 8px;
`;

const Container = styled.div`
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  font-size: 1.2rem;
`;

const StyledUl = styled.ul`
  margin: 0 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  & li {
    list-style-type: none;
    margin: 8px;
    border-bottom: 1px solid var(--color-brand-600);
  }
`;

const StyledH1 = styled.h1`
  margin: 16px 32px;
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
      <ImgContainer>
        <StyledImg
          src={imageUrl?.url ? imageUrl?.url : "no-photo.png"}
          // For test purpose
          // src="../../public/no-photo.png"
          alt={carName}
        />
      </ImgContainer>
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
      <StyledH1>Car Specs</StyledH1>
      <StyledCarList>
        <StyledUl>
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
          <li>Contact : {contact}</li>
        </StyledUl>

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
