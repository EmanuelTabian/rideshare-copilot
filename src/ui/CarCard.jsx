import { version } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dateFormatter } from "../utils/helpers";
import { useUser } from "../features/authentication/useUser";
import { useGetImageUrl } from "../features/carposts/useGetImageUrl";
import Modal from "./Modal";
import CarPostForm from "../features/carposts/CarPostForm";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteCarPost } from "../features/carposts/useDeleteCarPost";

const StyledListItem = styled.li``;
const CarDetailContainer = styled.div``;
const CarInfo = styled.div``;
const CarHeaderData = styled.span``;
const CarDetailsData = styled.span``;

const Img = styled.img`
  width: 100px;
`;
const Button = styled.button``;
function CarCard({ carDetails, onCloseModal }) {
  const { deleteCarPost, isDeletingCarPost } = useDeleteCarPost();
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
  console.log(id);

  const canEditOrRemove = user_id === user.id;
  const { isLoading, imageUrl, error } = useGetImageUrl(id);

  function handleDelete() {
    deleteCarPost(id, {
      onSettled: () => {
        onCloseModal?.();
      },
    });
  }

  return (
    <StyledListItem>
      <Img src={imageUrl?.url} alt={car_name} />
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
          <div> Price: {price} EUR</div>
        </CarDetailContainer>
      </CarInfo>
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
    </StyledListItem>
  );
}

export default CarCard;
