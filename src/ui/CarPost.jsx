import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGetImageUrl } from "../features/carposts/useGetImageUrl";
import { dateFormatter } from "../utils/helpers";
import Spinner from "./Spinner";
import CarPostForm from "../features/carposts/CarPostForm";

import { TbFileDescription } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteCarPost } from "../features/carposts/useDeleteCarPost";
import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";

const SpinnerContainer = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 16px;
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
  margin: 0 32px 32px 32px;
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

const StyledButton = styled.button`
  margin: 0 32px;
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;
  background-color: white;

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

function CarPost({ carPost }) {
  const navigate = useMoveBack();
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

  const { deleteCarPost, isDeletingCarPost } = useDeleteCarPost();

  function handleDelete() {
    console.log(id);

    deleteCarPost(id, {
      onSettled: () => {
        navigate();
      },
    });
  }

  return (
    <>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <ImgContainer>
          <StyledImg
            src={imageUrl?.url ? imageUrl?.url : "no-photo.png"}
            // For test purpose
            // src="../../public/no-photo.png"
            alt={carName}
          />
        </ImgContainer>
      )}
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
          <Modal>
            <Modal.Open opens="edit">
              <StyledButton> Edit post</StyledButton>
            </Modal.Open>
            <Modal.Open opens="delete">
              <StyledButton> Delete post</StyledButton>
            </Modal.Open>
            <Modal.Window name="edit">
              <CarPostForm carDetails={carPost} />
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
      </StyledCarList>
    </>
  );
}

export default CarPost;
