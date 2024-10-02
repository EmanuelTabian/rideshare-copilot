import { useState, version } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dateFormatter } from "../utils/helpers";
import { useUser } from "../features/authentication/useUser";
import { useGetImageUrl } from "../features/carposts/useGetImageUrl";
import Modal from "./Modal";
import CarPostForm from "../features/carposts/CarPostForm";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteCarPost } from "../features/carposts/useDeleteCarPost";

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;

  span {
    padding: 8px;
    border-bottom: 1px solid var(--color-brand-600);

    margin: 4px;
  }

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  display: flex;
`;

const Img = styled.img`
  object-fit: contain;
  padding: 8px 0;
  min-width: 300px;
  width: 300px;
  border: none;
  border-radius: 32px;

  @media (min-width: 480px) {
    width: 400px;
  }
`;
const CarDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Button = styled.button`
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;

  display: inline;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;
function CarCard({ carDetails }) {
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    user_id,
    car_name,
    model,
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
    price,
  } = carDetails;
  const canEditOrRemove = user_id === user.id;
  const { isLoading, imageUrl, error } = useGetImageUrl(id);
  const { deleteCarPost, isDeletingCarPost } = useDeleteCarPost();

  function handleDelete() {
    deleteCarPost(id);
  }

  return (
    <>
      <StyledListItem>
        <ImgContainer>
          <Img
            src={imageUrl?.url ? imageUrl?.url : `no-photo.png`}
            alt={car_name}
          />
        </ImgContainer>

        <div>
          <CarDetailsContainer>
            <span> {car_name}</span>
            <span> {model}</span>
            <span>Version: {version ? version : "N/A"}</span>
            <span>Engine: {engine}</span>
            <span>Power: {power} CP</span>
            <span>Color: {color}</span>
            <span>Milleage: {milleage} km</span>
            <span>Fuel type: {fuel}</span>
            <span>Year: {year}</span>
            <span>Publication date: {dateFormatter(createdAt)}</span>
            <span>Location: {location ? location : "N/A"}</span>
            <span>Price: {price} EUR</span>
          </CarDetailsContainer>

          <Button onClick={() => navigate(`/cars/${id}`)}>See details</Button>
          {/* This button will be conditionally displayed for the current user car posts */}
          {canEditOrRemove && (
            <Modal>
              <Modal.Open opens="edit">
                <Button> Edit post</Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Button> Delete post</Button>
              </Modal.Open>
              <Modal.Window name="edit">
                <CarPostForm carDetails={carDetails} />
              </Modal.Window>
              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="car post"
                  disabled={false}
                  onConfirm={handleDelete}
                />
              </Modal.Window>
            </Modal>
          )}
        </div>
      </StyledListItem>
    </>
  );
}

export default CarCard;
