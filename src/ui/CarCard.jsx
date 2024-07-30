import { version } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledListItem = styled.li``;
const CarDetailContainer = styled.div``;
const CarInfo = styled.div``;
const CarHeaderData = styled.span``;
const CarDetailsData = styled.span``;

const Img = styled.img``;
const Button = styled.button``;
function CarCard({ carDetails }) {
  const navigate = useNavigate();

  const {
    name,
    model,
    image,
    year,
    version,
    engine,
    power,
    milleage,
    fuelType,
    color,
    createdAt,
    location,
    id,
  } = carDetails;
  return (
    <StyledListItem>
      <Img src={image} alt={name} />
      <CarInfo>
        <CarDetailContainer>
          <CarHeaderData> {name}</CarHeaderData>
          <CarHeaderData> {model}</CarHeaderData>
          <CarHeaderData> {version}</CarHeaderData>
          <CarHeaderData> {engine}</CarHeaderData>
          <CarHeaderData> {version}</CarHeaderData>
          <CarHeaderData> {power} CP</CarHeaderData>
          <CarHeaderData> {color}</CarHeaderData>
        </CarDetailContainer>
        <CarDetailContainer>
          <CarDetailsData> {milleage} km</CarDetailsData>
          <CarDetailsData> {fuelType}</CarDetailsData>
          <CarDetailsData> {year}</CarDetailsData>
        </CarDetailContainer>
        <CarDetailContainer>
          <CarDetailsData> {createdAt}</CarDetailsData>
          <CarDetailsData> {location}</CarDetailsData>
        </CarDetailContainer>
      </CarInfo>
      <Button onClick={() => navigate(`/cars/${id}`)}>See details</Button>
      {/* This button will be conditionally displayed for the current user car posts */}
      <Button> Edit post</Button>
    </StyledListItem>
  );
}

export default CarCard;
