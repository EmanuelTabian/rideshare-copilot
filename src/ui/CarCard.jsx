import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledListItem = styled.li``;

function CarCard({ carDetails }) {
  const navigate = useNavigate();

  const { name, model, image, year, id, createdAt } = carDetails;
  return (
    <StyledListItem>
      <span>{createdAt}</span>
      <img src={image} alt={name} />
      <span> {name}</span>
      <span> {model}</span>
      <span> {year}</span>
      <span> {name}</span>
      <button onClick={() => navigate(`/cars/${id}`)}>See details</button>
    </StyledListItem>
  );
}

export default CarCard;
