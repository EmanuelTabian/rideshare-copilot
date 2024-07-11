import { version } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledListItem = styled.li``;
const CarInfo = styled.div``;
const CarHeader = styled.div``;
const CarHeaderData = styled.span``;
const CarDetailsData = styled.span``;
const CarDetails = styled.span``;
const AdditionalInfo = styled.div``;
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
        <CarHeader>
          <CarHeaderData> {name}</CarHeaderData>
          <CarHeaderData> {model}</CarHeaderData>
          <CarHeaderData> {version}</CarHeaderData>
          <CarHeaderData> {engine}</CarHeaderData>
          <CarHeaderData> {version}</CarHeaderData>
          <CarHeaderData> {power} CP</CarHeaderData>
          <CarHeaderData> {color}</CarHeaderData>
        </CarHeader>
        <CarDetails>
          <CarDetailsData> {milleage} km</CarDetailsData>
          <CarDetailsData> {fuelType}</CarDetailsData>
          <CarDetailsData> {year}</CarDetailsData>
        </CarDetails>
        <AdditionalInfo>
          <CarDetailsData> {createdAt}</CarDetailsData>
          <CarDetailsData> {location}</CarDetailsData>
        </AdditionalInfo>
      </CarInfo>
      <Button onClick={() => navigate(`/cars/${id}`)}>See details</Button>
    </StyledListItem>
  );
}

export default CarCard;
