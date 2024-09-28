import styled from "styled-components";

const Img = styled.img`
  margin: 8px;
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
