import { version } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dateFormatter } from "../utils/helpers";
import { useUser } from "../features/authentication/useUser";

const StyledListItem = styled.li``;
const CarDetailContainer = styled.div``;
const CarInfo = styled.div``;
const CarHeaderData = styled.span``;
const CarDetailsData = styled.span``;

const Img = styled.img``;
const Button = styled.button``;
function CarCard({ carDetails }) {
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    user_id,
    car_name,
    model,
    image,
    year,
    version,
    engine,
    power,
    milleage,
    fuel,
    color,
    created_at: createdAt,
    location,
    id,
  } = carDetails;
  const canEditOrRemove = user_id === user.id;

  return (
    <StyledListItem>
      <Img src={image} alt={car_name} />
      <CarInfo>
        <CarDetailContainer>
          <CarHeaderData> {car_name}</CarHeaderData>
          <CarHeaderData> {model}</CarHeaderData>
          <CarHeaderData> {version}</CarHeaderData>
          <CarHeaderData> {engine}</CarHeaderData>
          <CarHeaderData> {version}</CarHeaderData>
          <CarHeaderData> {power} CP</CarHeaderData>
          <CarHeaderData> {color}</CarHeaderData>
        </CarDetailContainer>
        <CarDetailContainer>
          <CarDetailsData> {milleage} km</CarDetailsData>
          <CarDetailsData> {fuel}</CarDetailsData>
          <CarDetailsData> {year}</CarDetailsData>
        </CarDetailContainer>
        <CarDetailContainer>
          <CarDetailsData> {dateFormatter(createdAt)}</CarDetailsData>
          <CarDetailsData> {location}</CarDetailsData>
        </CarDetailContainer>
      </CarInfo>
      <Button onClick={() => navigate(`/cars/${id}`)}>See details</Button>
      {/* This button will be conditionally displayed for the current user car posts */}
      {canEditOrRemove && (
        <span>
          <Button> Edit post</Button>
          <Button> Delete post</Button>
        </span>
      )}
    </StyledListItem>
  );
}

export default CarCard;
