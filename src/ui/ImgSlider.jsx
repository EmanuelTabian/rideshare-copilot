import styled from "styled-components";

const Img = styled.img`
  width: 400px;
`;

function CarImgGrid({ imageUrl, alt }) {
  return (
    <div>
      <Img src={imageUrl} alt={alt} />
    </div>
  );
}

export default CarImgGrid;
