import styled from "styled-components";

const StyledListItem = styled.li``;

function CarCard({ carDetails }) {
  const { name, model, image, year, id } = carDetails;
  return (
    <StyledListItem>
      <img src={image} alt={name} />
      <span> {name}</span>
      <span> {model}</span>
      <span> {year}</span>
      <span> {name}</span>
    </StyledListItem>
  );
}

export default CarCard;
